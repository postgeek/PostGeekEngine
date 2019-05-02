import GraphicImage from '../GraphicImage';

/**
 * Defines a Spritesheet
 */
class SpriteSheet extends GraphicImage {
  /**
   * Constructs a new SpriteSheet object
   *
   * @param  {CanvasRenderingContext2D} context  The canvas' rednering context
   * @param  {Image} image              The image to be used for the spritesheet
   * @param  {SpriteSheetConfig} spriteSheetConfig the configuration object for the SpriteSheet
   */
  constructor(context, image, spriteSheetConfig) {
    super(context, image);
    // TODO: Check if the spritesheetconfig is a JSON object or not and then parse it into a spriteSheetConfig if needed
    this.spriteSheetConfig = spriteSheetConfig;
    this.Frames = {};
  }

  /**
   * Gets the spritesheet configuration object
   *
   * @return {SpriteSheetConfig} the spritesheet's configuration object
   */
  get SpriteSheetConfig() {
    return this.spriteSheetConfig;
  }

  /**
   * Draws the image on screen at 0,0.
   *
   * @return {undefined}
   */
  draw() {
    super.draw();
  }
} export default SpriteSheet;
