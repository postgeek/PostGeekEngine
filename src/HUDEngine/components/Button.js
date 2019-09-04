import ClickableComponent from './ClickableComponent';

import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Color from '../../renderingEngine/colors/Color';
import HSLColor from '../../renderingEngine/colors/HSLColor';

class Button extends ClickableComponent {
  constructor(point, clickCallback) {
    super(point);

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

    this.textGraphic = new TextGraphic(point.clone(), 'button');
    this.textGraphic.textStyle = textStyle;

    const height = this.textGraphic.determineFontHeight() + 8;
    const width = this.textGraphic.measureText() + 10;

    this.rectangle = new Rectangle(point.clone(), width, height);
    this.rectangle.geometryStyle = geometryStyle;

    this.textGraphic.point.y += height - 8;
    this.textGraphic.point.x += 5;

    this.width = width;
    this.height = height;
  }

  draw() {
    this.rectangle.draw();
    this.textGraphic.draw();
  }
} export default Button;
