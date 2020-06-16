import Point from "../../../src/core/Point";
import Circle from "../../../src/renderingEngine/geometry/Circle";
import Color from "../../../src/renderingEngine/colors/Color";
import GeometryStyle from "../../../src/renderingEngine/geometry/GeometryStyle";
import Rectangle from "../../../src/renderingEngine/geometry/Rectangle";
import TextGraphic from "../../../src/renderingEngine/text/TextGraphic";

export default class BoxSpring {  
    constructor() {
        this.height = 400;
        this.rectangleBorder = new Rectangle(new Point(0,0), 800, this.height);
        this.rectangleBorder.geometryStyle = new GeometryStyle({
            strokeStyle : Color.BLACK,
            fillStyle : Color.LIGHTBLUE,
        });
        this.text = new TextGraphic(new Point(10,100), 'Testing');
    }

    update(timestep) {
        this.text.text = 'Rectangle Position: (' + this.circle.x  + ',' + this.circle.y + ')';
    }

    draw(timestep) {
        this.rectangleBorder.draw();
    }
}