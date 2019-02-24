import GraphicObject from '../GraphicObject';

export default class BezierCurve extends GraphicObject {
  constructor(context, controlPoint1, controlPoint2, startPoint, endPoint) {
    super(context);
    this.ControlPoint1 = controlPoint1;
    this.ControlPoint2 = controlPoint2;
    this.StartPoint = startPoint;
    this.EndPoint = endPoint;
  }

  get ControlPoint1() {
    return this.controlPoint1;
  }

  set ControlPoint1(value) {
    this.controlPoint1 = value;
  }

  get ControlPoint2() {
    return this.controlPoint2;
  }

  set ControlPoint2(value) {
    this.contrlPoint2 = value;
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
    this.Context.bezierCurveTo(
      this.ControlPoint1.x,
      this.ControlPoint1.y,
      this.ControlPoint2.x,
      this.ControlPoint2.y,
      this.EndPoint.x,
      this.EndPoint.y,
    );
    this.Context.stroke();
  }
}
