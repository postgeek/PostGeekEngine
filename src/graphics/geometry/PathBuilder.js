import GraphicObject from '../GraphicObject';

/**
 * Class that implements the basic pathing methods for the 2D context
 *
 */
class PathBuilder extends GraphicObject {
  /**
  *  Constructs the PathBuild object
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  */
  constructor(context) {
    super(context);
    this.path = new Path2D();
  }

  /**
  * Gets the Path2D.
  * @return {Path2D} the path built by the path builder.
  */
  get Path() {
    return this.path;
  }

  /**
  * Begins a new path.
  */
  BeginPath() {
    this.Path.beginPath();
  }

  /**
  * Closes the current path.
  */
  ClosePath() {
    this.Path.closePath();
  }

  /**
  * Moves the current point to the provided point.
  * @param {Point} point the point to move to.
  */
  MoveTo(point) {
    this.Path.moveTo(point.X, point.Y);
  }

  /**
  * Draws a line from the current point to the next point.
  * @param {Point} point the point to draw a line to
  */
  LineTo(point) {
    this.Path.lineTo(point.X, point.Y);
  }

  /**
  * Draws a bezier curve using the provided control points and end point.
  *
  * @param {Point} controlPoint1 the first control point.
  * @param {Point} controlPoint2 the second control point.
  * @param {Point} endPoint the end point of the bezier curve.
  */
  BezierCurveTo(controlPoint1, controlPoint2, endPoint) {
    this.Path.bezierCurveTo(
      controlPoint1.X,
      controlPoint1.Y,
      controlPoint2.X,
      controlPoint2.Y,
      endPoint.X,
      endPoint.Y,
    );
  }

  /**
  * Draws a quadratic curve using the provided control point and end point1
  *
  * @param {Point} controlPoint the control point to use.
  * @param {Point} endPoint the end point of the quadratic curve.
  */
  QuadraticCurveTo(controlPoint, endPoint) {
    this.Path.quadraticCurveTo(
      controlPoint.X,
      controlPoint.Y,
      endPoint.X,
      endPoint.Y,
    );
  }

  /**
  * Draws an arc using the provided control points and radius
  *
  * @param {Point} controlPoint1 the first control point to use.
  * @param {Point} controlPoint2 the second control point to use.
  * @param {number} radius the radius to use for the arc.
  */
  ArcTo(controlPoint1, controlPoint2, radius) {
    this.Path.artTo(
      controlPoint1.X,
      controlPoint1.Y,
      controlPoint2.X,
      controlPoint2.Y,
      radius,
    );
  }
}
export default PathBuilder;
