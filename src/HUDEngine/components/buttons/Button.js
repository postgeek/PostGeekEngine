import ClickableComponent from '../ClickableComponent';

import Rectangle from '../../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';
import TextGraphic from '../../../renderingEngine/text/TextGraphic';
import TextStyle from '../../../renderingEngine/text/TextStyle';
import Color from '../../../renderingEngine/colors/Color';
import HSLColor from '../../../renderingEngine/colors/HSLColor';

class Button extends ClickableComponent {
  constructor(point, text, clickCallback) {
    super(point, clickCallback);

    this._text = text;

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

    this.textGraphic = new TextGraphic(this.point.clone(), this.text);
    this.textGraphic.textStyle = textStyle;

    const height = this.textGraphic.determineFontHeight() + 8;
    const width = this.textGraphic.measureText() + 10;

    this.rectangle = new Rectangle(this.point.clone(), width, height);
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

  draw() {
    this.rectangle.draw();
    this.textGraphic.draw();
  }

  recalculateBorders() {
    this.height = this.textGraphic.determineFontHeight() + 8;
    this.width = this.textGraphic.measureText() + 10;
    this.rectangle.width = this.width;
    this.rectangle.height = this.height;
  }
} export default Button;
