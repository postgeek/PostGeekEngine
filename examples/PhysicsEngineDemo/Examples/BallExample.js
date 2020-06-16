import Point from "../../../src/core/Point";
import Circle from "../../../src/renderingEngine/geometry/Circle";
import Color from "../../../src/renderingEngine/colors/Color";
import GeometryStyle from "../../../src/renderingEngine/geometry/GeometryStyle";
import Rectangle from "../../../src/renderingEngine/geometry/Rectangle";
import TextGraphic from "../../../src/renderingEngine/text/TextGraphic";

export default class BallExample {  
    constructor() {
        this.circlePoint = new Point(400,0);
        this.radius = 10;

        this.circle = new Circle(this.circlePoint, this.radius);
        this.circle.geometryStyle = new GeometryStyle({
            strokeStyle : Color.BLACK,
            fillStyle : Color.AQUA,
        });

        this.height = 400;

        this.rectangleBorder = new Rectangle(new Point(0,0), 800, this.height);
        this.rectangleBorder.geometryStyle = new GeometryStyle({
            strokeStyle : Color.BLACK,
            fillStyle : Color.LIGHTBLUE,
        });

        this.text = new TextGraphic(new Point(10,100), 'Testing');

        this.velocity = new Point(0,0);
        this.acceleration = new Point(0,0);
        this.gravity = 9.81;
        this.mass = 0.1;
        this.bounciness = -0.5;
        this.densityOfAir = 1.2;
        this.coefficientOfDrag = 0.47;
        this.frontalArea = (Math.PI * this.radius * this.radius) / 10000;
    }

    update(timestep) {
        var fy = 0;
        var dy = 0;

        fy += this.mass * this.gravity;
        fy += -1 * 0.5 * this.densityOfAir * this.coefficientOfDrag * this.frontalArea * Math.pow(this.velocity.y,2);

        dy = this.velocity.y * timestep + (0.5 * this.acceleration.y * Math.pow(timestep,2));
        if (isNaN(dy)) {
            dy = 0;
        }

        this.circle.y += Math.round(dy * 100);
        this.newAccelerationY = fy / this.mass;
        this.averageAccelerationY = 0.5 * (this.newAccelerationY + this.acceleration.y);
        this.velocity.y += this.averageAccelerationY * timestep;

        if (this.circle.y + this.radius > this.height && this.velocity.y > 0)
        {
            // This is a simplification of impulse-momentum collision response. e should be a negative number, which will change the velocity's direction. 
            this.velocity.y *= this.bounciness; 
            // Move the ball back a little bit so it's not still "stuck" in the wall. 
            this.circle.y = this.height - this.radius;                        
        }
        this.text.text = 'Ball Position: (' + this.circle.x  + ',' + this.circle.y + ')';
    }

    draw(timestep) {
        this.rectangleBorder.draw();
        this.circle.draw();
        this.text.draw();
    }
}