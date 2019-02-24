import GraphicObject from '../GraphicObject';

export default class Text extends GraphicObject {
  constructor(context, x, y, text) {
    super(context, x, y);
    this.Text = text;
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
