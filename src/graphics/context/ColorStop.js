import IndexSizeError from '../../errorHandling/errors/IndexSizeError';

class ColorStop {
  /**
  * Creates a new ColorStop object.
  *
  * @param {number} offset a number between 0 and 1.
  * @param {Color} color a HTML compliant color.
  */
  constructor(offset, color) {
    this.offset = offset;
    this.color = color;
  }

  /**
  * The offset for the color stop. (a value between 0 and 1)
  */
  get Offset() {
    return this.offset;
  }

  set Offset(value) {
    if (value >= 0 && value <= 1) {
      throw new IndexSizeError();
    }
    this.offset = value;
  }

  /**
  * The color for the color stop. (Must be HTML compliant)
  */
  get Color() {
    return this.color;
  }

  set Color(value) {
    this.color = value;
  }
}
export default ColorStop;
