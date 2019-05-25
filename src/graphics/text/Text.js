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
   * Defines the text style for the Text.
   */
  get TextStyle() {
    return this.textStyle;
  }

  set TextStyle(value) {
    this.textStyle = value;
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

  determineFontHeight() {
    const body = document.getElementsByTagName('body')[0];
    const dummy = document.createElement('div');
    const dummyText = document.createTextNode('M');
    dummy.appendChild(dummyText);
    dummy.setAttribute('style', `font:${this.TextStyle.font};`);
    body.appendChild(dummy);
    const result = dummy.offsetHeight;
    body.removeChild(dummy);
    return result;
  }

  draw() {
    // Saves the context (this may be a costly method call so check if it is).
    this.Context.save();
    this.Context = this.TextStyle.apply(this.Context);
    this.Context.strokeText(this.Text, this.Point.X, this.Point.Y);
    this.Context.fillText(this.Text, this.Point.X, this.Point.Y);
    // Restores the previously saved context.
    this.Context.restore();
  }
}
export default Text;
