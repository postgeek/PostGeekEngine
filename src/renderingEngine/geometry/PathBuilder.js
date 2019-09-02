/**
 * Class that implements the basic pathing methods for the 2D context
 *
 */
class PathBuilder {
  /**
  *  Constructs the PathBuild object
  *
  * @param {CanvasRenderingContext2D} context the canvas context.
  */
  constructor() {
    /** @private */
    this._path = new Path2D();
  }

  /**
  * Gets the Path2D.
  * @return {Path2D} the path built by the path builder.
  */
  get path() {
    return this._path;
  }

  /**
  * Closes the current path.
  */
  closePath() {
    this.path.closePath();
  }

  /**
  * Moves the current point to the provided point.
  * @param {Point} point the point to move to.
  */
  moveTo(point) {
    this.path.moveTo(point.X, point.Y);
  }

  /**
  * Draws a line from the current point to the next point.
  * @param {Point} point the point to draw a line to
  */
  lineTo(point) {
    this.path.lineTo(point.X, point.Y);
  }

  /**
  * Draws a bezier curve using the provided control points and end point.
  *
  * @param {Point} controlPoint1 the first control point.
  * @param {Point} controlPoint2 the second control point.
  * @param {Point} endPoint the end point of the bezier curve.
  */
  bezierCurveTo(controlPoint1, controlPoint2, endPoint) {
    this.path.bezierCurveTo(
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
  quadraticCurveTo(controlPoint, endPoint) {
    this.path.quadraticCurveTo(
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
  arcTo(controlPoint1, controlPoint2, radius) {
    this.path.arcTo(
      controlPoint1.X,
      controlPoint1.Y,
      controlPoint2.X,
      controlPoint2.Y,
      radius,
    );
  }
}
export default PathBuilder;
