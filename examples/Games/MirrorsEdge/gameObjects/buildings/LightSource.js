import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import PathBuilder from 'renderingEngine/geometry/path/PathBuilder';
import Transform from 'renderingEngine/context/Transform'
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';

class LightSource {

    constructor(point) {
        this.point = point;
        this.rotation = 0;
        this.transform = new Transform();
        this.rectangle = new Rectangle(new Point(0, 0), 64, 64);
        this.circle = new Circle(new Point(50, 0), 20);
        var pathBuilder = new PathBuilder();
        pathBuilder.moveTo(new Point(0, 0));
        pathBuilder.lineTo(new Point(24, 30));
        pathBuilder.lineTo(new Point(40, 30));
        pathBuilder.lineTo(new Point(64, 0));
        pathBuilder.lineTo(new Point(0, 0));

        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;

        this.path = pathBuilder.build();
        this.path.geometryStyle = new GeometryStyle({
            strokeStyle : Color.BLACK,
            fillStyle: color
        });

        this.circle = new Circle(new Point(32, 36), 10);
    }

    setRotation(value) {
        this.rotation = value;
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
        this.circle.draw();
        this.path.draw();
        this.transform.end();
    }

    clone() {
        return new LightSource(this.point.clone());
    }

} export default LightSource;