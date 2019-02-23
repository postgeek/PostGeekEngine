import DrawingStyle from '../context/DrawingStyle';

/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text
 */
export default class TextStyle extends DrawingStyle {
  constructor(config) {
    super(config);
    if ('font' in config) {
      this.Font = config.font;
    }
    if ('textAlign' in config) {
      this.TextAlign = config.textAlign;
    }
    if ('textBaseline' in config) {
      this.TextBaseline = config.textBaseline;
    }
    if ('direction' in config) {
      this.Direction = config.direction;
    }
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
}
