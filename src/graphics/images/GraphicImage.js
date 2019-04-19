import UndefinedError from '../../errorHandling/errors/UndefinedError';
import GraphicObject from '../GraphicObject';

/**
 * Class that defines an image that will be drawn onto the canvas.
 * @extends GraphicObject
 */
class GraphicImage extends GraphicObject {
  constructor(context, image) {
    super(context);
    this.Image = image;
  }

  /**
   * The image associated to the GraphicImage
   */
  get Image() {
    return this.image;
  }

  set Image(value) {
    this.image = value;
  }

  /**
   * get Height - gets the height for the image.
   *
   * @return {Number} The height of the image.
   */
  get Height() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.height;
  }

  /**
   * get Width - gets the width for the image.
   *
   * @return {Number} The width of the image.
   */
  get Width() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.width;
  }

  /**
   * draw - Draws the image on screen at 0,0.
   */
  draw() {
    this.Context.drawImage(this.Image, 0, 0);
  }


  /**
   * drawImageWithMask - draws and image within an image.
   *
   * @param  {Point} point   The coordinates in the destination canvas at which
   * to place the top-left corner of the source image.
   * @param  {Number} x      The x-axis coordinate of the top left corner of the
   * sub-rectangle of the source image to draw into the destination context.
   * @param  {Number} y      The y-axis coordinate of the top left corner of the
   * sub-rectangle of the source image to draw into the destination context.
   * @param  {Number} width  the image's width
   * @param  {Number} height the image's height
   */
  drawImageWithMask(point, x, y, width, height) {
    this.Context.drawImage(this.Image, x, y, width, height, point.X, point.Y, width, height);
  }
} export default GraphicImage;
