import Shape from './Shape';

/** @extends Shape */
class QuadraticCurve extends Shape {
  /**
  * Constructs a new QuadraticCurve object.
  *
  * @param {CanvasRenderingContext2D} context the canvas' context.
  * @param {Point} controlPoint the control point for the quadratic curve.
  * @param {Point} startPoint the starting point for the quadratic curve.
  * @param {Point} endPoint the end point for the quadratic curve.
  */
  constructor(context, startPoint, controlPoint, endPoint) {
    super(context);
    this.StartPoint = startPoint;
    this.ControlPoint = controlPoint;
    this.EndPoint = endPoint;
  }

  /**
  * The starting {@link Point} for the quadratic curve.
  */
  get StartPoint() {
    return this.startPoint;
  }

  set StartPoint(value) {
    this.startPoint = value;
  }

  /**
  * the control {@link Point} for the quadratic curve.
  */
  get ControlPoint() {
    return this.controlPoint;
  }

  set ControlPoint(value) {
    this.controlPoint = value;
  }

  /**
  * the end {@link Point} for the quadratic curve.
  */
  get EndPoint() {
    return this.endPoint;
  }

  set EndPoint(value) {
    this.endPoint = value;
  }

  /**
  * draws the quadratic curve to the context.
  */
  internalDraw() {
    this.Context.beginPath();
    this.Context.moveTo(this.StartPoint.X, this.StartPoint.Y);
    this.Context.quadraticCurveTo(
      this.ControlPoint.X,
      this.ControlPoint.Y,
      this.EndPoint.X,
      this.EndPoint.Y,
    );
    this.Context.stroke();
    this.Context.closePath();
  }
}
export default QuadraticCurve;
