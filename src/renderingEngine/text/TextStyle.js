import DrawingStyle from '../DrawingStyle';

export default class TextStyle extends DrawingStyle {
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

  set TextAlign(value) {
    this.textAlign = value;
  }

  get TextBaseline() {
    return this.textBaseline;
  }

  set TextBaseline(value) {
    this.textBaseline = value;
  }

  get Direction() {
    return this.direction;
  }

  set Direction(value) {
    this.direction = value;
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
}
