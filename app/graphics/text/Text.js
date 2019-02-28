import GraphicObject from '../GraphicObject';

export default class Text extends GraphicObject {
  constructor(context, point, text) {
    super(context);
    this.Point = point;
    this.Text = text;
  }

  get Point() {
    return this.point;
  }

  set Point(value) {
    this.Point = value;
  }

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
    this.Context.strokeText(this.Text, this.X, this.Y);
    this.Context.fillText(this.Text, this.X, this.Y);
  }
}
