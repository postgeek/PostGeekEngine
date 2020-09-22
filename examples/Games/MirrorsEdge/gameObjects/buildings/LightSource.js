import Point from 'core/Point';
import Circle from 'renderingEngine/geometry/Circle';
import PathBuilder from 'renderingEngine/geometry/PathBuilder';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';

class LightSource {

    constructor() {
        this.circle = new Circle(new Point(900, 100), 20);
        this.pathBuilder = new PathBuilder();
        this.pathBuilder.geometryStyle = new GeometryStyle({
            strokeStyle: Color.WHITE,
            fillStyle: Color.WHITE,
            lineWidth: 15,    
        });
        this.pathBuilder.moveTo(new Point(900, 100));
        this.pathBuilder.lineTo(new Point(920, 100));
        this.pathBuilder.lineTo(new Point(900, 110));
        this.pathBuilder.lineTo(new Point(920, 120));
    }

    draw() {
        //this.circle.draw();
        this.pathBuilder.draw();
    }

} export default LightSource;