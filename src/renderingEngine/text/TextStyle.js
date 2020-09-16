import DrawingStyle from '../DrawingStyle';
import InvalidArguementError from '../../core/errorHandling/errors/InvalidArguementError';

const DIRECTION = Object.freeze({
  LTR: { value: 'ltr' },
  RTL: { value: 'rtl' },
  INHERIT: { value: 'inherit' },
});

const TEXT_BASELINE = Object.freeze({
  TOP: { value: 'top' },
  BOTTOM: { value: 'bottom' },
  MIDDLE: { value: 'middle' },
  HANGING: { value: 'hanging' },
  ALPHABTIC: { value: 'alphabetic' },
  IDEOGRAPHIC: { value: 'ideographic' },
});

const TEXT_ALIGN = Object.freeze({
  LEFT: { value: 'left' },
  RIGHT: { value: 'right' },
  CENTER: { value: 'center' },
  START: { value: 'start' },
  END: { value: 'end' },
});

class TextStyle extends DrawingStyle {
  constructor({
    fillStyle,
    strokeStyle,
    lineWidth,
    shadowBlur,
    shadowColor,
    shadowOffsetX,
    shadowOffsetY,
    font,
    textAlign,
    textBaseline,
    direction,
  } = {}) {
    super({
      fillStyle,
      strokeStyle,
      lineWidth,
      shadowBlur,
      shadowColor,
      shadowOffsetX,
      shadowOffsetY,
    });
    this.Font = font;
    this.TextAlign = textAlign;
    this.TextBaseline = textBaseline;
    this.Direction = direction;
  }

  get Font() {
    return this.font;
  }

  set Font(value) {
    this.font = value;
  }

  get TextAlign() {
    return this.textAlign;
  }

  // TODO: Brealdown the methods in the setter to make it more readable
  set TextAlign(value) {
    if (value !== undefined) {
      if (TextStyle.isTextAlignValid(value)) {
        this.textAlign = value;
      } else {
        throw new InvalidArguementError(this);
      }
    } else {
      this.textAlign = value;
    }
  }

  static isTextAlignValid(textAlignToCheck) {
    for (const keyValuePair of Object.entries(TEXT_ALIGN)) {
      const values = keyValuePair[1];
      if (values.value === textAlignToCheck) {
        return true;
      }
    }
    return false;
  }

  get TextBaseline() {
    return this.textBaseline;
  }

  // TODO: Brealdown the methods in the setter to make it more readable
  set TextBaseline(value) {
    if (value !== undefined) {
      if (TextStyle.isTextBaselineValid(value)) {
        this.textBaseline = value;
      } else {
        throw new InvalidArguementError(this);
      }
    } else {
      this.textBaseline = value;
    }
  }

  static isTextBaselineValid(textBaselineToCheck) {
    for (const keyValuePair of Object.entries(TEXT_BASELINE)) {
      const values = keyValuePair[1];
      if (values.value === textBaselineToCheck) {
        return true;
      }
    }
    return false;
  }

  get Direction() {
    return this.direction;
  }

  // TODO: Breakdown the methods in the setter to make it more readable
  set Direction(value) {
    if (value !== undefined) {
      if (TextStyle.isDirectionValid(value)) {
        this.direction = value;
      } else {
        throw new InvalidArguementError(this);
      }
    } else {
      this.direction = value;
    }
  }

  static isDirectionValid(directionToCheck) {
    for (const keyValuePair of Object.entries(DIRECTION)) {
      const values = keyValuePair[1];
      if (values.value === directionToCheck) {
        return true;
      }
    }
    return false;
  }

  /**
   * apply - applies the text styling to the current context.
   *
   * @param  {CanvasRenderingContext2D} context the context to apply the styles for.
   * @return {CanvasRenderingContext2D} returns the new context with the stylings applied.
   */
  apply(context) {
    const newContext = super.apply(context);
    if (this.Font) {
      newContext.font = this.Font;
    }
    if (this.TextAlign) {
      newContext.textAlign = this.TextAlign;
    }
    if (this.TextBaseLine) {
      newContext.textBaseLine = this.TextBaseline;
    }
    if (this.Direction) {
      newContext.direction = this.Direction;
    }
    return newContext;
  }

  clone() {
    return new TextStyle({
      fillStyle: this.fillStyle,
      strokeStyle: this.StrokeStyle,
      lineWidth: this.LineWidth,
      shadowBlur: this.ShadowBlur,
      shadowColor: this.ShadowColor,
      shadowOffsetX: this.ShadowOffsetX,
      shadowOffsetY: this.ShadowOffsetY,
      font: this.Font,
      textAlign: this.TextAlign,
      textBaseLine: this.TextBaseline,
      direction: this.Direction,
    });
  }
} export default TextStyle;
export { DIRECTION, TEXT_BASELINE, TEXT_ALIGN };
