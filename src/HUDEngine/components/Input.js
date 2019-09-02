import GraphicComponent from '../GraphicComponent';
import ServiceLocator from '../../core/ServiceLocator';

import Rectangle from '../../renderingEngine/geometry/Rectangle';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Color from '../../renderingEngine/colors/Color';

class Input extends GraphicComponent {
  constructor(point, width) {
    super(point);

    const textStyle = new TextStyle({
      fillStyle: Color.BLACK,
      font: '14px Rockwell',
    });

    this.width = width;
    this.text = '';
    this.offsetX = 0;

    const eventbus = ServiceLocator.instance.locate('eventbus');
    const keyboard = ServiceLocator.instance.locate('keyboard');
    eventbus.register(keyboard.KEY_TYPED_EVENT, (event) => this.handleTypedKey(event));

    this.textGraphic = new TextGraphic(point.clone(), this.text);
    this.textGraphic.textStyle = textStyle;

    this.height = this.textGraphic.determineFontHeight();

    this.textGraphic.point.y += this.height;
    this.textGraphic.point.x += 5;

    this.height += 8;

    this.rectangle = new Rectangle(point.clone(),
      this.width,
      this.height);

    this.focus = false;
  }

  set text(value) {
    this._text = value;
  }

  get text() {
    return this._text;
  }

  set focus(value) {
    this._focus = value;
    if (this.focus) {
      this.rectangle.geometryStyle.fillStyle = Color.WHITE;
    } else {
      this.rectangle.geometryStyle.fillStyle = Color.LIGHTGRAY;
    }
  }

  get focus() {
    return this._focus;
  }

  set width(value) {
    this._width = value;
  }

  get width() {
    return this._width;
  }

  set height(value) {
    this._height = value;
  }

  get height() {
    return this._height;
  }

  set Container(value) {
    this.container = value;
  }

  get Container() {
    return this.container;
  }

  handleTypedKey(event) {
    if (this.focus) {
      if (event.length === 1) {
        this.text += event;
      } else if (event.toUpperCase() === 'BACKSPACE' && this.text.length >= 1) {
        this.text = this.text.substr(0, this.text.length - 1);
      }
      this.updateText();
    }
  }

  updateText() {
    const widthBefore = this.textGraphic.measureText();
    if (this.textGraphic.text !== this.text) {
      this.textGraphic.text = this.text;
    }
    const widthAfter = this.textGraphic.measureText();
    const deltaWidth = widthAfter - widthBefore;
    if ((widthAfter) > (this.width)) {
      this.offsetX += deltaWidth;
      this.textGraphic.point.x -= deltaWidth;
    } else {
      this.textGraphic.point.x += this.offsetX;
      this.offsetX = 0;
    }
  }

  draw() {
    this.rectangle.draw();
    this.textGraphic.draw();
  }
} export default Input;
