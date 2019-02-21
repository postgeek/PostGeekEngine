import IndexSizeError from '../../errorHandling/errors/IndexSizeError';

export default class ColorStop {
  constructor(offset, color) {
    this.offset = offset;
    this.color = color;
  }

  get Offset() {
    return this.offset;
  }

  set Offset(value) {
    if (value >= 0 && value <= 1) {
      throw new IndexSizeError();
    }
    this.offset = value;
  }

  get Color() {
    return this.color;
  }

  set Color(value) {
    this.color = value;
  }
}
