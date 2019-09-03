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

    this.validators = [];
    this.width = width;
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
    this.text = '';
  }

  set text(value) {
    this._text = value;
    this.updateText();
    // this.textGraphic.text = this.text;
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

  addValidator(validator) {
    this.validators.push(validator);
  }

  getValidators() {
    return this.validators;
  }

  handleTypedKey(event) {
    const beforeText = this.text.toString();
    let afterText = '';

    if (this.focus) {
      if (event.length === 1) {
        afterText = beforeText + event;
      } else if (event.toUpperCase() === 'BACKSPACE' && beforeText.length >= 1) {
        afterText = beforeText.substr(0, beforeText.length - 1);
      } else {
        afterText = beforeText;
      }

      const validators = this.getValidators();
      for (let i = 0; i < validators.length; i += 1) {
        const validator = validators[i];
        if (!validator.validate(afterText)) {
          return;
        }
      }
      this.text = afterText;
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
