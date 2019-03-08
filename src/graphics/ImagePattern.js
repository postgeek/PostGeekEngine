export default class ImagePattern {
  constructor(context, image, repeat) {
    this.Context = context;
    this.Image = image;
    this.Repeat = repeat;
  }

  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }

  get Image() {
    return this.image;
  }

  set Image(value) {
    this.image = value;
  }

  get Repeat() {
    return this.repeat;
  }

  set Repeat(value) {
    this.repeat = value;
  }
}
