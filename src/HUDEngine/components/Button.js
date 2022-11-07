import ClickableComponent from './ClickableComponent';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Color from '../../renderingEngine/colors/Color';
import HSLColor from '../../renderingEngine/colors/HSLColor';

class Button extends ClickableComponent {
  constructor(point, text, clickCallback) {
    super(point);

    this._text = text;
    this.handleClick = clickCallback;

    const textStyle = new TextStyle({
      fillStyle: Color.BLACK,
      font: '14px Rockwell',
    });
    const geometryStyle = new GeometryStyle({
      fillStyle: Color.WHITE,
      strokeStyle: new HSLColor(177, 97, 58),
      lineWidth: 4,
      lineJoin: 'round',
    });

    this.textGraphic = new TextGraphic(point.clone(), this.text, textStyle);

    const height = this.textGraphic.determineFontHeight() + 8;
    const width = this.textGraphic.getTextWidth() + 10;

    this.rectangle = new Rectangle(point.clone(), width, height);
    this.rectangle.geometryStyle = geometryStyle;

    this.textGraphic.point.y += height - 8;
    this.textGraphic.point.x += 5;

    this.width = width;
    this.height = height;
  }

  set text(value) {
    this._text = value;
    this.textGraphic.text = this.text;
    this.recalculateBorders();
  }

  get text() {
    return this._text;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = value;
  }

  setTextColor(color) {
    this.textGraphic.textStyle.fillStyle = color;
  }

  setRectangleColor(color) {
    this.rectangle.geometryStyle.strokeStyle = color;
  }

  setRectangleBackgroundColor(color) {
    this.rectangle.geometryStyle.fillStyle = color;
  }

  recalculateBorders() {
    this.height = this.textGraphic.determineFontHeight() + 8;
    this.width = this.textGraphic.getTextWidth() + 10;
    this.rectangle.width = this.width;
    this.rectangle.height = this.height;
  }

  update(event) {
    if (this.isMouseColliding(event) && !this.disabled) {
      this.handleClick(event);
    }
  }

  internalDraw() {
    this.rectangle.draw();
    this.textGraphic.draw();
  }
}
export default Button;
