import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import Transform from 'renderingEngine/context/Transform'
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';

class Goal {

    constructor(point) {
        this.point = point;
        this.rotation = 0;
        this.transform = new Transform();
        this.rectangle = new Rectangle(new Point(0, 0), 64, 64);
        this.innerCircle = new Circle(new Point(32,32),6);
        this.innerCircle.geometryStyle = new GeometryStyle({
            fillStyle: Color.LIGHTGRAY,
        });
        this.outerCircle = new Circle(new Point(32,32),10);
        this.outerCircle.geometryStyle = new GeometryStyle({
            fillStyle: Color.BLACK,
        });
    }

    rotate() {
        this.rotation += 90;
        if(this.rotation >= 360) {
            this.rotation = 0;
        }
    }

    draw() {
        this.transform.begin();
        this.transform.translate(this.point.x, this.point.y);
        this.rectangle.draw();
        this.transform.translate(32, 32);
        this.transform.rotate(this.rotation);
        this.transform.translate(-32, -32);
        this.outerCircle.draw();
        this.innerCircle.draw();
        this.transform.end();
    }

} export default Goal;