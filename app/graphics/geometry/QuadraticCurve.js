import GraphicObject from '../GraphicObject';

export default class BezierCurve extends GraphicObject {
  constructor(context, controlPoint, startPoint, endPoint) {
    super(context);
    this.ControlPoint = controlPoint;
    this.StartPoint = startPoint;
    this.EndPoint = endPoint;
  }

  get ControlPoint() {
    return this.controlPoint1;
  }

  set ControlPoint(value) {
    this.controlPoint1 = value;
  }

  get StartPoint() {
    return this.startPoint;
  }

  set StartPoint(value) {
    this.startPoint = value;
  }

  get EndPoint() {
    return this.endPoint;
  }

  set EndPoint(value) {
    this.endPoint = value;
  }

  draw() {
    this.Context.beginPath();
    this.Context.moveTo(this.StartPoint.x, this.StartPoint.y);
    this.Context.quadraticCurveTo(
      this.ControlPoint.x,
      this.ControlPoint.y,
      this.EndPoint,
      this.EndPoint,
    );
    this.Context.stroke();
    this.Context.closePath();
  }
}
