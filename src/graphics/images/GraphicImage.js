import UndefinedError from '../../errorHandling/errors/UndefinedError';
import GraphicObject from '../GraphicObject';

/**
 * Class that defines an image that will be drawn onto the canvas.
 */
class GraphicImage extends GraphicObject {
  /**
   * Constructs a new GraphicImage
   *
   * @param  {CanvasRenderingContext2D} context the canvas' rendering context
   * @param  {Image} image  The image associated to the GraphicImage
   */
  constructor(context, image) {
    super(context);
    this.Image = image;
  }

  /**
   * Gets the image associated to the GraphicImage
   *
   * @return {Image}  The image to draw on screen.
   */
  get Image() {
    return this.image;
  }

  /**
   * Specifies the image associated to the GraphicImage
   *
   * @param  {Image} value the image associated to the GraphicImage
   * @return {undefined}
   */
  set Image(value) {
    /** @private */
    this.image = value;
  }

  /**
   * Gets the height for the image.
   *
   * @throws {UndefinedError} Throws an error if the image is not defined
   * @return {Number} The height of the image.
   */
  get Height() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.height;
  }

  /**
   * Gets the width for the image.
   *
   * @throws {UndefinedError} Throws an error if the image is not defined
   * @return {Number} The width of the image.
   */
  get Width() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.width;
  }

  /**
   * Draws the image on screen at 0,0.
   */
  draw() {
    this.Context.drawImage(this.Image, 0, 0);
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
  drawImageWithMask(destrinationPoint, subRectanglePoint, width, height) {
    this.Context.drawImage(
      this.Image,
      subRectanglePoint.X,
      subRectanglePoint.Y,
      width,
      height,
      destrinationPoint.X,
      destrinationPoint.Y,
      width,
      height,
    );
  }
} export default GraphicImage;
