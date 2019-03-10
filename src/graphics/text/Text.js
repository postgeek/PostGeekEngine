import GraphicObject from '../GraphicObject';

class Text extends GraphicObject {
  constructor(context, point, text) {
    super(context);
    this.Point = point;
    this.Text = text;
  }

  /**
   * The point coordinates for the text.
   */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the text.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the text.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
   * The text to draw on the screen.
   */
  get Text() {
    return this.text;
  }

  set Text(value) {
    this.text = value;
  }

  /**
  * Measure the provided text.
  * https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics
  *
  * @param {TextMetrics} textMetrics the textMetrics for the current text.
  */
  measureText() {
    return this.Context.measureText(this.Text);
  }

  draw() {
    this.Context.lineWidth = '4';
    this.Context.strokeStyle = 'lightblue';
    this.Context.fillStyle = 'darkblue';
    this.Context.font = '52px serif';
    this.Context.strokeText(this.Text, this.Point.X, this.Point.Y);
    this.Context.fillText(this.Text, this.Point.X, this.Point.Y);
  }
}
export default Text;
