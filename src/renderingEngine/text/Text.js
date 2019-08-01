import GraphicObject from '../GraphicObject';
import TextStyle from './TextStyle';

class Text extends GraphicObject {
  constructor(point, text) {
    super();
    this.point = point;
    this.text = text;
    this.textStyle = new TextStyle({
      fillStyle: 'darkblue',
      strokeStyle: 'lightblue',
      lineWidth: 2,
      font: '88px serif',
    });
  }

  /**
   * The point coordinates for the text.
   */
  get point() {
    return this._point;
  }

  set point(value) {
    this._point = value;
  }

  /**
   *  The X coordinate of the text.
   */
  get x() {
    return this.point.x;
  }

  set x(value) {
    this.point.x = value;
  }

  /**
  *  The Y coordinate of the text.
  */
  get y() {
    return this.point.y;
  }

  set y(value) {
    this.point.y = value;
  }

  /**
   * The text to draw on the screen.
   */
  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
  }

  /**
   * Defines the text style for the Text.
   */
  get textStyle() {
    return this._textStyle;
  }

  set textStyle(value) {
    this._textStyle = value;
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
    this.context = this.textStyle.apply(this.context);
    if (this.textStyle.FillStyle !== undefined) {
      this.context.fillText(this.Text, this.point.x, this.point.y);
    }
    if (this.textStyle.StrokeStyle !== undefined) {
      this.context.strokeText(this.Text, this.point.x, this.point.y);
    }
  }
}
export default Text;
