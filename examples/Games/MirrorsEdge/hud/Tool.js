import Rectangle from 'renderingEngine/geometry/Rectangle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import Point from 'core/Point';

class Tool {

    constructor(name, hotkey, quantity, building) {
        this.name = name;
        this.hotKey = hotkey.hotKey;
        this.quantity = quantity;
        this.toolTip = hotkey.toolTip;

        this.point = new Point(20,20);
        this.toolSize = 64;

        this.toolBuilding = building;
        if(this.toolBuilding !== undefined) {
            this.toolBuilding.point = this.point.clone();
        }

        this.whiteBackground = new Rectangle(this.point, this.toolSize, this.toolSize);
        this.whiteBackground.geometryStyle = new GeometryStyle({
            fillStyle: Color.WHITE,
        });

        let mediumPurple = Color.MEDIUMPURPLE.hslaColor;
        mediumPurple.alpha = 0.5;
        this.selectedToolStyle = new GeometryStyle({
            fillStyle: mediumPurple,
            strokeStyle: Color.WHITE,
            lineWidth: 3,
        });

        let purple = Color.PURPLE.hslaColor;
        purple.alpha = 0.5;
        this.defaultToolStyle = new GeometryStyle({
            fillStyle: purple,
            strokeStyle: Color.WHITE,
            lineWidth: 3,
        });

        var toolPosition = this.point.clone();
        this.toolContainer = new Rectangle(toolPosition, this.toolSize, this.toolSize);
        this.toolContainer.geometryStyle = this.defaultToolStyle;
        var textPosition = this.point.clone();
        textPosition.x += 4;
        this.hotKeyText = new TextGraphic(textPosition, this.toolTip);
        this.hotKeyText.textStyle = new TextStyle({
            fillStyle: Color.WHITE,
            font: "18px Arial",
        });
        this.hotKeyText.point.y = this.hotKeyText.point.y + this.hotKeyText.determineFontHeight() - 2;

        let quantityTextPosition = this.point.clone();
        this.quantityText = new TextGraphic(quantityTextPosition, this.quantity);
        if(this.quantity === -1) {
            this.quantityText.text = "INF";
        }
        this.quantityText.textStyle = new TextStyle({
            fillStyle: Color.AQUAMARINE,
            font: "14px Arial"
        });  
    }

    get isInfinite() {
        return this.quantity === -1;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
        if(this.quantityText !== undefined) {
            if(this.quantity === -1) {
                this.quantityText.text = 'INF';
            } else {
                this.quantityText.text = this._quantity;
            }
        }
    }

    setPosition(point) {
        this.point = point;

        var toolPosition = this.point.clone();
        this.toolContainer.point = toolPosition
        var textPosition = this.point.clone();
        textPosition.x += 4;
        this.hotKeyText.point = textPosition;
        this.hotKeyText.point.y = this.hotKeyText.point.y + this.hotKeyText.determineFontHeight() - 2;
        let quantityTextPosition = this.point.clone();
        this.quantityText.point = quantityTextPosition;
        this.quantityText.point.x = this.quantityText.point.x + this.toolSize - this.quantityText.measureText() - 5;
        this.quantityText.point.y = this.quantityText.point.y + (this.toolSize - this.quantityText.determineFontHeight()) + 10;  
        if(this.toolBuilding !== undefined) {
            this.toolBuilding.point = this.point.clone();
        }
        var whiteBackgroundPosition = this.point.clone();
        this.whiteBackground.point = whiteBackgroundPosition;
    }

    draw() {
        this.whiteBackground.draw();
        if(this.toolBuilding !== undefined) {
            this.toolBuilding.draw();
        }
        this.toolContainer.draw();
        this.hotKeyText.draw();
        this.quantityText.draw();
    }

    update() {

    }

} export default Tool;