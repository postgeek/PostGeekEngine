import Point from 'core/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import PathBuilder from 'renderingEngine/geometry/path/PathBuilder';
import Transform from 'renderingEngine/context/Transform'
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';

class Mirror {

    constructor(point) {
        this.point = point;
        this.rotation = 0;
        this.transform = new Transform();
        this.rectangle = new Rectangle(new Point(0, 0), 64, 64);
        var pathBuilder = new PathBuilder();
        pathBuilder.moveTo(new Point(0, 0));
        pathBuilder.arcTo(new Point(10, 64), new Point(64,64), 64);
        pathBuilder.lineTo(new Point(64, 64));
        pathBuilder.lineTo(new Point(64, 0));
        pathBuilder.lineTo(new Point(0, 0));

        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;

        this.path = pathBuilder.build();
        this.path.geometryStyle = new GeometryStyle({
            fillStyle: color,
            strokeStyle: Color.BLACK,
            lineWidth: 1,
        });
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
        this.path.draw();
        this.transform.end();
    }

    clone() {
        return new Mirror(this.point.clone());
    }

} export default Mirror;