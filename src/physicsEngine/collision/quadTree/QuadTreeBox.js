import Rectangle from '../../../renderingEngine/geometry/Rectangle';
import Point from '../../../core/Point';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';

// TODO: REMOVE any dependencies from the renderingEngine
export default class QuadTreeBox {  

    constructor(x, y, width, height, color) {
        this.gameEntities = [];
        this.rectangle = new Rectangle(new Point(x, y), width, height);
        var quadTreeBoxStyle = new GeometryStyle({
            fillStyle: color,
          });
        this.rectangle.geometryStyle = quadTreeBoxStyle;
    }

    draw() {
        this.rectangle.draw();
    }


}
