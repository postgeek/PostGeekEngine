import TextGraphic from '../../renderingEngine/text/TextGraphic';
import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GraphicComponent from '../GraphicComponent';

class TextArea extends GraphicComponent {
  constructor(point, text, width, height, textStyle) {
    super(point);

    this.TextStyle = textStyle;

    this.Text = new TextGraphic(point.clone(), text);
    this.Text.textStyle = this.TextStyle;
    this.Border = new Rectangle(point.clone(), width, height);
    this.firstDraw = true;

    this.Texts = [];

    this.Text.point.x += 5;

    this.fitTextToContainer();
  }

  fitTextToContainer() {
    const containerWidth = this.Border.width - 10;
    const containerHeight = this.Border.height - 20;

    const textWidth = this.Text.measureText().width;
    let textHeight = 0;

    const amountOfLines = Math.ceil(textWidth / containerWidth);

    let temporaryTextObject = new TextGraphic(this.Text.point.clone(), '');
    temporaryTextObject.textStyle = this.TextStyle;

    if (amountOfLines > 1) {
      for (let i = 0; i < this.Text.text.length; i += 1) {
        temporaryTextObject.text += this.Text.text[i];

        if (temporaryTextObject.measureText().width > containerWidth
              && textHeight < containerHeight) {
          let tempText = temporaryTextObject.text;
          tempText = tempText.substring(0, tempText.length - 1);
          i -= 1;
          temporaryTextObject.text = tempText;
          this.Texts.push(temporaryTextObject);
          temporaryTextObject = new TextGraphic(this.Text.point.clone(), '');
          temporaryTextObject.textStyle = this.TextStyle;

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
        this.Texts[i].point.y += this.Texts[i].determineFontHeight() * (i + 1);
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
