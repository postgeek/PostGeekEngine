import GraphicObject from '../GraphicObject';

/**
 * Class that implements the basic pathing methods for the 2D context
 *
 */
export default class PathBuilder extends GraphicObject {
  constructor(context) {
    super(context);
    this.path = new Path2D();
  }

  get Path() {
    return this.path;
  }

  BeginPath() {
    this.Path.beginPath();
  }

  ClosePath() {
    this.Path.closePath();
  }

  MoveTo(point) {
    this.Path.moveTo(point.X, point.Y);
  }

  LineTo(point) {
    this.Path.lineTo(point.X, point.Y);
  }

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

  QuadraticCurveTo(controlPoint, endPoint) {
    this.Path.quadraticCurveTo(
      controlPoint.X,
      controlPoint.Y,
      endPoint.X,
      endPoint.Y,
    );
  }

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
