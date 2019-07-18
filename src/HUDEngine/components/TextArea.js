import Text from '../../renderingEngine/text/Text';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GraphicComponent from '../GraphicComponent';

class TextArea extends GraphicComponent {
  constructor(context, point, text, width, height, textStyle) {
    super(context);

    this.TextStyle = textStyle;

    this.Text = new Text(this.Context, point.clone(), text);
    this.Text.TextStyle = this.TextStyle;
    this.Border = new Rectangle(this.Context, point.clone(), width, height);
    this.firstDraw = true;

    this.Texts = [];

    this.Text.Point.X += 5;

    this.fitTextToContainer();
  }

  fitTextToContainer() {
    const containerWidth = this.Border.Width - 10;
    const containerHeight = this.Border.Height - 20;

    const textWidth = this.Text.measureText().width;
    let textHeight = 0;

    const amountOfLines = Math.ceil(textWidth / containerWidth);

    let temporaryTextObject = new Text(this.Context, this.Text.Point.clone(), '');
    temporaryTextObject.TextStyle = this.TextStyle;

    if (amountOfLines > 1) {
      for (let i = 0; i < this.Text.Text.length; i += 1) {
        temporaryTextObject.Text += this.Text.Text[i];

        if (temporaryTextObject.measureText().width > containerWidth
              && textHeight < containerHeight) {
          let tempText = temporaryTextObject.Text;
          tempText = tempText.substring(0, tempText.length - 1);
          i -= 1;
          temporaryTextObject.Text = tempText;
          this.Texts.push(temporaryTextObject);
          temporaryTextObject = new Text(this.Context, this.Text.Point.clone(), '');
          temporaryTextObject.TextStyle = this.TextStyle;

          textHeight += this.Text.determineFontHeight();
        }
      }
    }
    this.Texts.push(temporaryTextObject); // Remove this later it constraints the height
  }

  get TextStyle() {
    return this.textStyle;
  }

  set TextStyle(value) {
    this.textStyle = value;
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
    if (this.firstDraw) {
      for (let i = 0; i < this.Texts.length; i += 1) {
        this.Texts[i].Point.Y += this.Texts[i].determineFontHeight() * (i + 1);
      }
      this.firstDraw = false;
    }
    for (let i = 0; i < this.Texts.length; i += 1) {
      this.Texts[i].draw();
    }
    this.Border.draw();
  }
}
export default TextArea;
