import ClickableComponent from './ClickableComponent';
import ServiceLocator from '../../core/ServiceLocator';

import Rectangle from '../../renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../renderingEngine/geometry/GeometryStyle';
import TextGraphic from '../../renderingEngine/text/TextGraphic';
import TextStyle from '../../renderingEngine/text/TextStyle';
import Color from '../../renderingEngine/colors/Color';

class TextInput extends ClickableComponent {
  constructor(point, width) {
    super(point);

    this.defaultFocusStyle = new GeometryStyle({ fillStyle: Color.WHITE });
    this.defaultUnFocusStyle = new GeometryStyle({ fillStyle: Color.LIGHTGRAY });

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
  }

  get text() {
    return this._text;
  }

  set focus(value) {
    this._focus = value;
    if (this.focus) {
      this.rectangle.geometryStyle = this.defaultFocusStyle;
    } else {
      this.rectangle.geometryStyle = this.defaultUnFocusStyle;
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

  handleClick(clicked) {
    if (clicked) {
      this.focus = true;
    } else {
      this.focus = false;
    }
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
} export default TextInput;
