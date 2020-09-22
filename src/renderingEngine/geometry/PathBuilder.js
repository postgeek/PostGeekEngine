import Shape from './Shape';
import Point from '../../core/Point';

/**
 * Class that implements the basic pathing methods for the 2D context
 *
 */
class PathBuilder extends Shape {
  /**
  *  Constructs the PathBuild object
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  */
  constructor() {
    /** @private */
    super();
  }

  /**
  * Moves the current point to the provided point.
  * @param {Point} point the point to move to.
  */
  moveTo(point) {
    this.context.moveTo(point.x, point.y);
  }

  /**
  * Draws a line from the current point to the next point.
  * @param {Point} point the point to draw a line to
  */
  lineTo(point) {
    this.context.lineTo(point.x, point.y);
  }

  /**
  * Draws a bezier curve using the provided control points and end point.
  *
  * @param {Point} controlPoint1 the first control point.
  * @param {Point} controlPoint2 the second control point.
  * @param {Point} endPoint the end point of the bezier curve.
  */
  bezierCurveTo(controlPoint1, controlPoint2, endPoint) {
    this.context.bezierCurveTo(
      controlPoint1.X,
      controlPoint1.Y,
      controlPoint2.X,
      controlPoint2.Y,
      endPoint.x,
      endPoint.y,
    );
  }

  /**
  * Draws a quadratic curve using the provided control point and end point1
  *
  * @param {Point} controlPoint the control point to use.
  * @param {Point} endPoint the end point of the quadratic curve.
  */
  quadraticCurveTo(controlPoint, endPoint) {
    this.context.quadraticCurveTo(
      controlPoint.x,
      controlPoint.y,
      endPoint.x,
      endPoint.y,
    );
  }

  /**
  * Draws an arc using the provided control points and radius
  *
  * @param {Point} controlPoint1 the first control point to use.
  * @param {Point} controlPoint2 the second control point to use.
  * @param {number} radius the radius to use for the arc.
  */
  arcTo(controlPoint1, controlPoint2, radius) {
    this.context.arcTo(
      controlPoint1.X,
      controlPoint1.Y,
      controlPoint2.X,
      controlPoint2.Y,
      radius,
    );
  }

  internalDraw() {
    this.moveTo(new Point(900, 100));
    this.lineTo(new Point(920, 100));
    this.lineTo(new Point(900, 110));
    this.lineTo(new Point(920, 120));
  }
}
export default PathBuilder;
