class Sprite {
  /**
  * Constructs a new Sprite object.
  *
  * @param {Point} point the starting point for the sprite.
  * @param {number} width the width of the sprite.
  * @param {number} height the height of the sprite.
  * @param {image} spriteSheet the sprite sheet for the sprite.
  */
  constructor(point, width, height, spriteSheet) {
    this.Point = point;
    this.Width = width;
    this.Height = height;
    this.SpriteSheet = spriteSheet;
  }

  /**
  * The sprite's starting point.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
   *  The X coordinate of the sprite.
   */
  get X() {
    return this.Point.X;
  }

  set X(value) {
    this.Point.X = value;
  }

  /**
  *  The Y coordinate of the sprite.
  */
  get Y() {
    return this.Point.Y;
  }

  set Y(value) {
    return this.Point.Y;
  }

  /**
  * The sprite's width
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The sprite's height
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  /**
  * The sprite's sprite sheet.
  */
  get SpriteSheet() {
    return this.spriteSheet;
  }

  set SpriteSheet(value) {
    this.spriteSheet = value;
  }

  /**
  * Renders the Sprite on the screen.
  * @param {CanvasRenderingContext2D} context the canvas' context.
  */
  Render(context) {
    context.drawImage(this.spriteSheet, this.x, this.y, this.width, this.height);
  }
}
export default Sprite;
