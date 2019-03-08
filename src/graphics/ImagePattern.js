class ImagePattern {
  /**
  * Constructs a new ImagePattern object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {image} image the image to use for the pattern.
  * @param {string} repeat the option for defining how the image repeats.
  */
  constructor(context, image, repeat) {
    this.Context = context;
    this.Image = image;
    this.Repeat = repeat;
  }

  /**
  * The canvas' context.
  */
  get Context() {
    return this.context;
  }

  set Context(value) {
    this.context = value;
  }

  /**
  * The image for the pattern.
  */
  get Image() {
    return this.image;
  }

  set Image(value) {
    this.image = value;
  }

  /**
  * The repeat option to use when repeating the image.
  */
  get Repeat() {
    return this.repeat;
  }

  set Repeat(value) {
    this.repeat = value;
  }
}
export default ImagePattern;
