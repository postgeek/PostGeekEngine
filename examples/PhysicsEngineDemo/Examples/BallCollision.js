import Point from "../../../src/core/Point";
import Circle from "../../../src/renderingEngine/geometry/Circle";
import Color from "../../../src/renderingEngine/colors/Color";
import DefaultColors from "../../../src/renderingEngine/colors/DefaultColors";
import TextGraphic from "../../../src/renderingEngine/text/TextGraphic";
import GeometryStyle from "../../../src/renderingEngine/geometry/GeometryStyle";
import Line from '../../../src/renderingEngine/geometry/Line';
import Ball from "./entities/Ball";
import ServiceLocator from '../../../src/core/ServiceLocator';
import LineSegment from "./entities/LineSegment";
import TextStyle from "../../../src/renderingEngine/text/TextStyle";

export default class BoxSpring {  
    constructor() {
        this.balls = [];
        this.lineSegments = [];
        var MAX_BALLS = 50;
        var MAX_LINES = 4;
        this.height = 600;
        this.width = 1000;

        this.selectedBall =  undefined;
        this.selectedLine =  undefined;
        this.selectedLineStart = false;

        this.collidingPairs = [];
        this.mouse = ServiceLocator.instance.locate('mouse');

        this.debugText = new TextGraphic(new Point(600, 50), "[Insert text here]");
        this.debugText.textStyle = new TextStyle({
            font: "32px Rockwell",
            fillStyle: Color.BLACK,
        });

        var lineRadius = 10;
        for(var i = 0; i < MAX_LINES; i++) {
            var lineSegment = new LineSegment(new Point(30,120 + i * 80), new Point(300, 120 + i * 80), lineRadius);
            this.lineSegments.push(lineSegment);
        }

        for(var i = 0; i < MAX_BALLS; i++) {
            let x = Math.random() * this.width;
            let y = Math.random() * this.height;
            var circle = new Circle(new Point(x, y), Math.random() * 10 + 5);
            circle.geometryStyle.fillStyle = DefaultColors[Math.floor(Math.random() * DefaultColors.length)];
            this.createBallAndAddToArray(circle, this.balls.length);
        }
    }

    update(timestep) {
        this.collidingPairs = [];
        if(this.mouse.buttonDownOnce()) {
            this.selectedBall = this.selectBallInMousePointer();
            this.selectedLine = this.selectLinePointInMousePoint();
        }
        else if(this.mouse.buttonPressed()) {
            //this.moveSelectedBall();
            if(this.selectedLine !== undefined) {
                if(this.selectedLineStart) {
                    this.selectedLine.startPoint.x = this.mouse.x;
                    this.selectedLine.startPoint.y = this.mouse.y;
                }
                else {
                    this.selectedLine.endPoint.x = this.mouse.x;
                    this.selectedLine.endPoint.y = this.mouse.y;
                }
            }
        } else {
            if(this.selectedBall !== undefined) {
                this.accelerateSelectedBall();
            }
            this.selectedBall = undefined;
            this.selectedLine = undefined;
        }

        var numberOfSimulationUpdates = 4;
        var simulationElapsedTime = timestep / numberOfSimulationUpdates;

        var maxSimulationSteps = 15;

        for(let j = 0; j < numberOfSimulationUpdates; j++) {

            for(var i = 0; i < this.balls.length; i++) {
                this.balls[i].simulationTimeRemaining = simulationElapsedTime;
            }
    
            for(var l = 0; l < maxSimulationSteps; l++) {
                for(var i = 0; i < this.balls.length; i++) {
                    let ball = this.balls[i];
                    this.updatePhysicsObjects(ball, simulationElapsedTime);
                }
                
                // Static collisions
                for(var i = 0; i < this.balls.length; i++) {
                    var ball = this.balls[i];

                    for(var k = 0; k < this.lineSegments.length; k++) {
                        var lineSegment = this.lineSegments[k];
                        var lineX1 = lineSegment.endPoint.x - lineSegment.startPoint.x;
                        var lineY1 = lineSegment.endPoint.y - lineSegment.startPoint.y;

                        var lineX2 = ball.x - lineSegment.startPoint.x;
                        var lineY2 = ball.y - lineSegment.startPoint.y;

                        var edgeLength = lineX1 * lineX1 + lineY1 * lineY1;

                        var t = Math.max(0, Math.min(edgeLength, (lineX1 * lineX2 + lineY1 * lineY2))) / edgeLength;

                        var closestPointX = lineSegment.startPoint.x + t * lineX1;
                        var closestPointY = lineSegment.startPoint.y + t * lineY1;
                        var closestPoint = new Point(closestPointX, closestPointY) 

                        var distance = this.calculateDistanceBetweenTwoPoints(ball.circle.point, closestPoint);
                        //var distance = Math.sqrt((ball.x - closestPointX)*(ball.x - closestPointX) + (ball.y - closestPointY)*(ball.y - closestPointY));

                        if(distance <= (ball.radius + lineSegment.radius)) {

                            // Static collision has occured
                            var fakeCircle = new Circle(new Point(closestPointX, closestPointY), lineSegment.radius);
                            var fakeBall = new Ball(fakeCircle, 0);
                            fakeBall.mass = ball.mass * 0.8;
                            fakeBall.velocity.x = -ball.velocity.x;
                            fakeBall.velocity.y = -ball.velocity.y;

                            this.collidingPairs.push([ball, fakeBall]);
                            var overlap = (distance - ball.radius - fakeBall.radius);

                            // Resolve static collision
                            ball.circle.x -= overlap * (ball.x - fakeBall.x) / distance;
                            ball.circle.y -= overlap * (ball.y - fakeBall.y) / distance;
                        }
                    }

                    for(var k = 0; k < this.balls.length; k++) {
                        var target = this.balls[k];
                        if(ball.id != target.id) {
                            if(this.doCirclesOverlap(ball, target)) {
                                // These two objects are colliding so we add them to the array
                                this.collidingPairs.push([ball, target]);
                                this.resolveStaticCollisions(ball, target);
                            }
                        }
                    }

                    // Time Displacement
                    var intendedSpeed = ball.velocity.magnitude();
                    var intendedDistance = intendedSpeed * ball.simulationTimeRemaining;
                    var actualDistance = this.calculateDistanceBetweenTwoPoints(ball.circle.point, ball.oldPosition);
                    //var actualDistance = Math.sqrt((ball.x - ball.oldPosition.x)*(ball.x - ball.oldPosition.x) + (ball.y - ball.oldPosition.y)*(ball.y - ball.oldPosition.y));
                    var actualTime = actualDistance / intendedSpeed;

                    ball.simulationTimeRemaining = ball.simulationTimeRemaining - actualTime;
                }

                

                // Now work out dynamic collisions
                for(var i = 0; i < this.collidingPairs.length; i++) {
                    let ball = this.collidingPairs[i][0];
                    let target = this.collidingPairs[i][1];
                    this.resolveDynamicCollisions(ball, target);
                }
            }

            this.collidingPairs = [];
        }
    }

    draw(timestep) {
        for(var i = 0; i < this.balls.length; i++) {
            this.balls[i].circle.draw();
        }
        for(var i = 0; i < this.collidingPairs.length; i++) {
            let ball1 = this.collidingPairs[i][0];
            let ball2 = this.collidingPairs[i][1];
            var line = new Line(ball1.circle.point, ball2.circle.point);
            line.geometryStyle = new GeometryStyle({
                lineWidth: 1,
                strokeStyle: Color.RED,
                fillStyle: Color.RED,
            });
            line.draw();
        }
        if(this.selectedBall !== undefined) {
            var line = new Line(this.selectedBall.circle.point, this.mouse.point);
            line.geometryStyle = new GeometryStyle({
                lineWidth: 1,
                strokeStyle: Color.BLUE,
                fillStyle: Color.BLUE,
            });
            line.draw();  
        }
        for(var i = 0; i < this.lineSegments.length; i++) {
            var lineSegment = this.lineSegments[i];
            this.drawLineSegment(lineSegment);  
        }
        this.debugText.draw();
    }

    calculateDistanceBetweenTwoPoints(point1, point2) {
        return Math.sqrt((point1.x - point2.x)*(point1.x - point2.x) + (point1.y - point2.y)*(point1.y - point2.y));
    }

    updatePhysicsObjects(ball, elapsedTime) {
        if(ball.simulationTimeRemaining > 0)
        {
            ball.oldPosition.y = ball.x;
            ball.oldPosition.y = ball.y;

            // Update acceleration, velcity, and position
            ball.acceleration.x = -ball.velocity.x * 0.8;
            ball.acceleration.y = -ball.velocity.y * 0.8 + 100;

            ball.velocity.x += ball.acceleration.x * ball.simulationTimeRemaining;
            ball.velocity.y += ball.acceleration.y * ball.simulationTimeRemaining;
            ball.circle.x += ball.velocity.x * ball.simulationTimeRemaining;
            ball.circle.y += ball.velocity.y * ball.simulationTimeRemaining;

            // Makes sure they stay in screen
            if(ball.x < 0) ball.circle.x += this.width;
            if(ball.x >= this.width) ball.circle.x -= this.width;
            if(ball.y < 0) ball.circle.y += this.height;
            if(ball.y >= this.height) ball.circle.y -= this.height;

            if(Math.abs(ball.velocity.x*ball.velocity.x + ball.velocity.y*ball.velocity.y) < 0.01) {
                ball.velocity.x = 0;
                ball.velocity.y = 0;    
            }
        }
    }

    resolveStaticCollisions(ball, target) {
        // Distance between ball centers
        var distance = this.calculateDistanceBetweenTwoPoints(ball.circle.point, target.circle.point);
        //var distance = Math.sqrt((ball.x - target.x)*(ball.x - target.x) + (ball.y - target.y)*(ball.y - target.y));

        var overlap = 0.5 * (distance - ball.radius - target.radius);

        // Resolve static collision
        ball.circle.x -= overlap * (ball.x - target.x) / distance;
        ball.circle.y -= overlap * (ball.y - target.y) / distance;

        target.circle.x += overlap * (ball.x - target.x) / distance;
        target.circle.y += overlap * (ball.y - target.y) / distance;
    }

    resolveDynamicCollisions(ball, target) {
        var distance = this.calculateDistanceBetweenTwoPoints(ball.circle.point, target.circle.point);
        //var distance = Math.sqrt((ball.x - target.x)*(ball.x - target.x) + (ball.y - target.y)*(ball.y - target.y));

        // normal vector
        var nx = (target.x - ball.x) / distance;
        var ny = (target.y - ball.y) / distance;

        // tangent
        var tx = -ny;
        var ty = nx;

        // dot product tangent
        var dpTan1 = ball.velocity.x * tx + ball.velocity.y * ty;
        var dpTan2 = target.velocity.x * tx + target.velocity.y * ty;

        // dot product normal
        var dpNorm1 = ball.velocity.x * nx + ball.velocity.y * ny;
        var dpNorm2 = target.velocity.x * nx + target.velocity.y * ny;

        // conservation of momentum in 1D
        var m1 = (dpNorm1 * (ball.mass - target.mass) + 2 * target.mass * dpNorm2) / (ball.mass + target.mass);
        var m2 = (dpNorm2 * (target.mass - ball.mass) + 2 * ball.mass * dpNorm1) / (ball.mass + target.mass);

        ball.velocity.x = tx * dpTan1 + nx * m1;
        ball.velocity.y = ty * dpTan1 + ny * m1;
        target.velocity.x = tx * dpTan2 + nx * m2;
        target.velocity.y = ty * dpTan2 + ny * m2;
    }

    selectBallInMousePointer() {
        for(var i = 0; i < this.balls.length; i++) { 
            if(this.isPointInCircle(this.mouse.point, this.balls[i].circle) && this.selectedBall === undefined) {
                return this.balls[i];
            }
        }
    }

    selectLinePointInMousePoint() {
        // Refactor the LineSegment to have circles by default
        for(var i = 0; i < this.lineSegments.length; i++) {
            var lineSegment = this.lineSegments[i];
            var startCircle = new Circle(lineSegment.startPoint,lineSegment.radius);
            if(this.isPointInCircle(this.mouse.point, startCircle) && this.selectedLine === undefined) {
                this.selectedLineStart = true;
                return lineSegment;
            }
            var endCircle = new Circle(lineSegment.endPoint,lineSegment.radius);
            if(this.isPointInCircle(this.mouse.point, endCircle) && this.selectedLine === undefined) {
                this.selectedLineStart = false;
                return lineSegment;
            }
        }
    }

    createBallAndAddToArray(circle, id) {
        var ball = new Ball(circle, id);
        this.balls.push(ball);
    }

    accelerateSelectedBall() {
        this.selectedBall.velocity.x = 5 * (this.selectedBall.x - this.mouse.x);
        this.selectedBall.velocity.y = 5 * (this.selectedBall.y - this.mouse.y);
    }

    moveSelectedBall() {
        if(this.selectedBall !== undefined) {
            this.selectedBall.circle.x = this.mouse.x;
            this.selectedBall.circle.y = this.mouse.y;
        }
    }

    isPointInCircle(point, circle) {
        var distance = (point.x - circle.x) * (point.x - circle.x) + (point.y - circle.y) * (point.y - circle.y);
        var radius = circle.radius * circle.radius;
        return (distance < radius);
    }

    doCirclesOverlap(circle, target) {
        return Math.abs((circle.x - target.x)*(circle.x - target.x) + (circle.y - target.y)*(circle.y - target.y)) <= (circle.radius + target.radius)*(circle.radius + target.radius);
    }

    drawLineSegment(lineSegment) {
        var startCircle = new Circle(lineSegment.startPoint, lineSegment.radius);
        startCircle.geometryStyle = new GeometryStyle({
                fillStyle: Color.GRAY,
        });
        var endCircle = new Circle(lineSegment.endPoint, lineSegment.radius);
        endCircle.geometryStyle = new GeometryStyle({
            fillStyle: Color.GRAY,
        });

        var newEndPoint = lineSegment.endPoint.clone();
        var newStartPoint = lineSegment.startPoint.clone();
        newEndPoint.y *= -1;
        newStartPoint.y *= -1;

        var nx = -(lineSegment.endPoint.y - lineSegment.startPoint.y);
        var ny = (lineSegment.endPoint.x - lineSegment.startPoint.x);
        var d = this.calculateDistanceBetweenTwoPoints(newEndPoint, newStartPoint);
        //var d = Math.sqrt(nx*nx + ny*ny);
        nx /= d;
        ny /= d;

        var topLine = new Line(
            new Point(
                lineSegment.startPoint.x - nx * lineSegment.radius,
                lineSegment.startPoint.y - ny * lineSegment.radius
                ),
            new Point(
                lineSegment.endPoint.x - nx * lineSegment.radius,
                lineSegment.endPoint.y - ny * lineSegment.radius
            ),
        );
        topLine.geometryStyle = new GeometryStyle({
            fillStyle: Color.GRAY,
            strokeStyle: Color.GRAY,
        });

        var bottomLine = new Line(
            new Point(
                lineSegment.startPoint.x + nx * lineSegment.radius,
                lineSegment.startPoint.y + ny * lineSegment.radius
                ),
            new Point(
                lineSegment.endPoint.x + nx * lineSegment.radius,
                lineSegment.endPoint.y + ny * lineSegment.radius
            ),
        );
        bottomLine.geometryStyle = new GeometryStyle({
            fillStyle: Color.GRAY,
            strokeStyle: Color.GRAY,
        });

        bottomLine.draw();
        topLine.draw();
        startCircle.draw();
        endCircle.draw();
    }
}