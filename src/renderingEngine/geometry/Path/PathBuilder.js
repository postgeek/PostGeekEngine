import Path from './Path';

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
    this._path = new Path();
  }

  /**
  * Gets the Path2D.
  * @return {Path2D} the path built by the path builder.
  */
  get path() {
    return this._path;
  }

  /**
   * Builds and returns the path.
   */
  build() {
    return this.path;
  }

  /**
  * Moves the current point to the provided point.
  * @param {Point} point the point to move to.
  */
  moveTo(point) {
    const moveTo = () => this.path.context.moveTo(point.x, point.y);
    this.path.addStep(moveTo);
  }

  /**
  * Draws a line from the current point to the next point.
  * @param {Point} point the point to draw a line to
  */
  lineTo(point) {
    const lineTo = () => this.path.context.lineTo(point.x, point.y);
    this.path.addStep(lineTo);
  }

  /**
  * Draws a bezier curve using the provided control points and end point.
  *
  * @param {Point} controlPoint1 the first control point.
  * @param {Point} controlPoint2 the second control point.
  * @param {Point} endPoint the end point of the bezier curve.
  */
  bezierCurveTo(controlPoint1, controlPoint2, endPoint) {
    const bezierCurveTo = () => this.path.context.bezierCurveTo(
      controlPoint1.x,
      controlPoint1.y,
      controlPoint2.x,
      controlPoint2.y,
      endPoint.x,
      endPoint.y,
    );
    this.path.addStep(bezierCurveTo);
  }

  /**
  * Draws a quadratic curve using the provided control point and end point1
  *
  * @param {Point} controlPoint the control point to use.
  * @param {Point} endPoint the end point of the quadratic curve.
  */
  quadraticCurveTo(controlPoint, endPoint) {
    const quadraticCurveTo = () => this.path.context.quadraticCurveTo(
      controlPoint.x,
      controlPoint.y,
      endPoint.x,
      endPoint.y,
    );
    this.path.addStep(quadraticCurveTo);
  }

  /**
  * Draws an arc using the provided control points and radius
  *
  * @param {Point} controlPoint1 the first control point to use.
  * @param {Point} controlPoint2 the second control point to use.
  * @param {number} radius the radius to use for the arc.
  */
  arcTo(controlPoint1, controlPoint2, radius) {
    const arcTo = () => this.path.context.arcTo(
      controlPoint1.x,
      controlPoint1.y,
      controlPoint2.x,
      controlPoint2.y,
      radius,
    );
    this.path.addStep(arcTo);
  }

  internalDraw() {
    this.moveTo(new Point(900, 100));
    this.lineTo(new Point(920, 100));
    this.lineTo(new Point(900, 110));
    this.lineTo(new Point(920, 120));
  }
}
export default PathBuilder;
