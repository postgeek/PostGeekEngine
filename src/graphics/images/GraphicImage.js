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
    return this.Image.height;
  }

  get Width() {
    return this.Image.width;
  }

  draw() {
    this.Context.drawImage(this.Image, 0, 0);
  }

  drawImageWithMask(point, x, y, width, height) {
    this.Context.drawImage(this.Image, x, y, width, height, point.X, point.Y, width, height);
  }
} export default GraphicImage;
