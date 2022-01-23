import UndefinedError from '../../core/errorHandling/errors/UndefinedError';
import GraphicObject from '../GraphicObject';

/**
 * Class that defines an image that will be drawn onto the canvas.
 */
class GraphicImage extends GraphicObject {
  /**
   * Constructs a new GraphicImage
   *
   * @param  {Image} image  The image associated to the GraphicImage
   */
  constructor(image, isLoaded = false) {
    super();
    this.image = image;
    this.isLoaded = isLoaded;
  }

  /**
   * Gets the image associated to the GraphicImage
   *
   * @return {Image}  The image to draw on screen.
   */
  get image() {
    return this._image;
  }

  /**
   * Specifies the image associated to the GraphicImage
   *
   * @param  {Image} value the image associated to the GraphicImage
   * @return {undefined}
   */
  set image(value) {
    /** @private */
    this._image = value;
  }

  get isLoaded() {
    return this._isLoaded;
  }

  set isLoaded(value) {
    this._isLoaded = value;
  }

  /**
   * Gets the height for the image.
   *
   * @throws {UndefinedError} Throws an error if the image is not defined
   * @return {Number} The height of the image.
   */
  get height() {
    if (this.image === undefined) {
      throw new UndefinedError(this);
    }
    return this.image.height;
  }

  /**
   * Gets the width for the image.
   *
   * @throws {UndefinedError} Throws an error if the image is not defined
   * @return {Number} The width of the image.
   */
  get width() {
    if (this.image === undefined) {
      throw new UndefinedError(this);
    }
    return this.image.width;
  }

  /**
   * Draws the image on screen at 0,0.
   */
  draw() {
    if (this.isLoaded) {
      this.context.drawImage(this.image, 0, 0);
    }
  }

  /**
   * Draws and image within an image.
   *
   * @param  {Point} destrinationPoint   The coordinates in the destination canvas at which
   * to place the top-left corner of the source image.
   * @param  {Point} subRectanglePoint   The coordinates of the top left corner of
   * the sub-rectangle of the source image to draw into the destination context.
   * @param  {Number} width  the sub-image's width
   * @param  {Number} height the sub-image's height
   */
  drawImageWithMask(destinationPoint, subRectanglePoint, width, height) {
    if (this.isLoaded) {
      this.context.drawImage(
        this.image,
        subRectanglePoint.x,
        subRectanglePoint.y,
        width,
        height,
        destinationPoint.x,
        destinationPoint.y,
        width,
        height,
      );
    }
  }
} export default GraphicImage;
