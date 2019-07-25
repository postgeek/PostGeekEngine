import GraphicObject from '../GraphicObject';
import TextStyle from './TextStyle';

class Text extends GraphicObject {
  constructor(point, text) {
    super();
    this.Point = point;
    this.Text = text;
    this.TextStyle = new TextStyle({
      fillStyle: 'black',
      font: '12px serif',
    });
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
    this.Point.Y = value;
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
    this.context.save();
    this.context = this.TextStyle.apply(this.context);
    const textMetrics = this.context.measureText(this.Text);
    this.context.restore();
    return textMetrics;
  }

  /**
   * Determines the approximate font height of the text
   * @link //TODO link to the stackoverflow
   * @return {Number} The height of the text.
   */
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

  internalDraw() {
    this.context = this.TextStyle.apply(this.context);
    if (this.TextStyle.FillStyle !== undefined) {
      this.context.fillText(this.Text, this.Point.X, this.Point.Y);
    }
    if (this.TextStyle.StrokeStyle !== undefined) {
      this.context.strokeText(this.Text, this.Point.X, this.Point.Y);
    }
  }
}
export default Text;
