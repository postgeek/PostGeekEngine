import GraphicImage from '../GraphicImage';


class SpriteSheet extends GraphicImage {
  constructor(context, image, spriteSheetConfig) {
    super(context, image);
    this.spriteSheetConfig = spriteSheetConfig;
  }

  get SpriteSheetConfig() {
    return this.spriteSheetConfig;
  }

  draw() {
    super.draw();
  }
} export default GraphicImage;
