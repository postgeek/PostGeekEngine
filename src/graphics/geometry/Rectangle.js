import GraphicObject from '../GraphicObject';

/** @extends GraphicObject */
class Rectangle extends GraphicObject {
  /**
  * Constructs a new Rectangle object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} point the starting point of the rectangle.
  * @param {number} width the width of the rectangle.
  * @param {number} height the height of the rectangle.
  */
  constructor(context, point, width, height) {
    super(context);
    this.Point = point;
    this.Width = width;
    this.Height = height;
  }

  /**
  * The rectangle's starting {@link Point}.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
  * The rectangle's width.
  */
  get Width() {
    return this.width;
  }

  set Width(value) {
    this.width = value;
  }

  /**
  * The rectangle's height.
  */
  get Height() {
    return this.height;
  }

  set Height(value) {
    this.height = value;
  }

  /**
  * Draws the rectangle to the current context.
  */
  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '6';
    this.Context.strokeStyle = 'red';
    this.Context.rect(this.Point.X, this.Point.Y, this.Width, this.Height);
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default Rectangle;
