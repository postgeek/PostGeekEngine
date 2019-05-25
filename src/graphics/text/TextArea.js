import Text from './Text';
import Rectangle from '../geometry/Rectangle';
import GraphicObject from '../GraphicObject';

class TextArea extends GraphicObject {
  constructor(context, point, text, width, height) {
    super(context);

    this.text = new Text(this.Context, point, text);
    this.border = new Rectangle(this.Context, point, width, height);

    const textPoint = point.clone();
    this.text.Point = textPoint;
    this.text.Point.Y += 30;
  }

  get Text() {
    return this.text;
  }

  set Text(value) {
    this.text = value;
  }

  get Border() {
    return this.border;
  }

  set Border(value) {
    this.border = value;
  }

  draw() {
    this.Text.draw();
    this.Border.draw();
  }
}
export default TextArea;
