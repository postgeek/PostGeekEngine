import UndefinedError from '../../errorHandling/errors/UndefinedError';
import GraphicObject from '../GraphicObject';

class GraphicImage extends GraphicObject {
  constructor(context, image) {
    super(context);
    this.Image = image;
  }

  get Image() {
    return this.image;
  }

  set Image(value) {
    this.image = value;
  }

  get Height() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.height;
  }

  get Width() {
    if (this.Image === undefined) {
      throw new UndefinedError(this);
    }
    return this.Image.width;
  }

  draw() {
    this.Context.drawImage(this.Image, 0, 0);
  }

  drawImageWithMask(point, x, y, width, height) {
    this.Context.drawImage(this.Image, x, y, width, height, point.X, point.Y, width, height);
  }
} export default GraphicImage;
