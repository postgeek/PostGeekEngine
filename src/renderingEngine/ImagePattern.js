/**
 * Creates an image pattern to be used for fill or stroke styles
 */
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
   * Gets the rendering context
   *
   * @return {CanvasRenderingContext2D} The rendering context
   */
  get Context() {
    return this.context;
  }

  /**
   * Specifies the rendering context
   *
   * @param  {CanvasRenderingContext2D} value The rendering context
   * @return {undefined}
   */
  set Context(value) {
    /** @private */
    this.context = value;
  }

  /**
   * Gets The image to use for the pattern.
   *
   * @return {Image}  The image to used for the pattern
   */
  get Image() {
    return this.image;
  }

  /**
   * Specifies the image to be used for the pattern
   *
   * @param  {type} value description
   * @return {type}       description
   */
  set Image(value) {
    /** @private */
    this.image = value;
  }

  /**
   * Gets the repeat option to use when repeating the image.
   *
   * @return {string}  The repeat option to use for the pattern
   */
  get Repeat() {
    return this.repeat;
  }

  /**
   * Specifies the repeat option for the ImagePattern
   * Accepted values:
   * repeat (both directions),
   * repeat-x (horizontal only),
   * repeat-y (vertical only),
   * no-repeat (neither direction)
   *
   * @param  {string} value The repeat option
   * @return {undefined}
   */
  set Repeat(value) {
    /** @private */
    this.repeat = value;
  }
}
export default ImagePattern;
