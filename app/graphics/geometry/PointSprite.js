import GraphicObject from '../GraphicObject';

/** @extends GraphicObject */
class PointSprite extends GraphicObject {
  /**
  * Constructs a new PointSprite object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} point the point to draw onto the screen.
  */
  constructor(context, point) {
    super(context);
    this.Point = point;
  }

  /**
  * The physical representation of the {@link Point}.
  */
  get Point() {
    return this.point;
  }

  set Point(value) {
    this.point = value;
  }

  /**
  * Draws the point onto the context.
  */
  draw() {
    this.Context.beginPath();
    this.Context.lineWidth = '1';
    this.Context.strokeStyle = 'lightblue';
    this.Context.arc(this.Point.X, this.Point.Y, 2, 0, 2 * Math.PI);
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default PointSprite;
