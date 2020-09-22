import Rectangle from 'renderingEngine/geometry/Rectangle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';

class Tile {

    constructor(point, size) {
        this.point = point;
        this.size = size;
        this._building = undefined;

        this.defaultTileStyle = new GeometryStyle({
            fillStyle: Color.WHITE,
            strokeStyle: Color.BLACK,
            lineWidth: 1,
        });
        this.selectedTileStyle = new GeometryStyle({
            fillStyle: Color.AQUAMARINE,
            strokeStyle: Color.BLACK,
            lineWidth: 1,
        });
        this._tileGraphic = new Rectangle(point, size, size);
        this._tileGraphic.geometryStyle = this.defaultTileStyle;

        let textPoint = point.clone();
        this._tileText = new TextGraphic(textPoint, '0');
        this._tileText.textStyle = new TextStyle({
            fillStyle: Color.BLACK,
            font: "18px Arial"
        });
        this._tileText.point.y = textPoint.y + this._tileText.determineFontHeight();
        this._tileText.point.x = textPoint.x + 4;
    }

    set building(value) {
        this._building = value;
    }

    set isSelectable(value) {
        this._isSelectable = value;
    }

    get isSelectable() {
        return this._isSelectable;
    }

    set tileText(value) {
        this._tileText.text = value;
    }

    get tileText() {
        return this._tileText;
    }

    get tileGraphic() {
        return this._tileGraphic;
    }

    isOccupied() {
        return this._building !== undefined;
    }

} export default Tile;