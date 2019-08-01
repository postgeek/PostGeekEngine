import BezierCurve from '../../../src/renderingEngine/geometry/BezierCurve';
import Point from '../../../src/core/Point';

import ContextMock from '../../mocks/ContextMock';

import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('BezierCurve', () => {
  it('Should properly draw the bezierCurve to the screen', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);
    const bezierCurveInternalDrawSpy = jest.spyOn(BezierCurve.prototype, 'internalDraw');
    const contextMoveToSpy = jest.spyOn(ContextMock.prototype, 'moveTo');
    const contextBezierCurveToSpy = jest.spyOn(ContextMock.prototype, 'bezierCurveTo');

    // Act
    bezierCurve.draw();

    // Assert
    expect(bezierCurveInternalDrawSpy).toHaveBeenCalledTimes(1);
    expect(contextMoveToSpy).toHaveBeenCalledTimes(1);
    expect(contextBezierCurveToSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set startPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);
    const newStartPoint = new Point(123, 432);

    // Act
    bezierCurve.startPoint = newStartPoint;

    // Assert
    expect(bezierCurve.startPoint.x).toBe(newStartPoint.x);
    expect(bezierCurve.startPoint.y).toBe(newStartPoint.y);
  });
  it('Should properly set the first controlPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);
    const newControlPoint = new Point(123, 231);

    // Act
    bezierCurve.firstControlPoint = newControlPoint;

    // Assert
    expect(bezierCurve.firstControlPoint.x).toBe(newControlPoint.x);
    expect(bezierCurve.firstControlPoint.y).toBe(newControlPoint.y);
  });
  it('Should properly set the first controlPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);
    const newControlPoint = new Point(123, 231);

    // Act
    bezierCurve.secondControlPoint = newControlPoint;

    // Assert
    expect(bezierCurve.secondControlPoint.x).toBe(newControlPoint.x);
    expect(bezierCurve.secondControlPoint.y).toBe(newControlPoint.y);
  });
  it('Should properly set the endPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);
    const newEndPoint = new Point(192, 234);

    // Act
    bezierCurve.endPoint = newEndPoint;

    // Assert
    expect(bezierCurve.endPoint.x).toBe(newEndPoint.x);
    expect(bezierCurve.endPoint.y).toBe(newEndPoint.y);
  });
  it('Should copy the given bezierCurve', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint1 = new Point(54, 23);
    const controlPoint2 = new Point(120, 64);
    const endPoint = new Point(65, 89);
    const bezierCurve = new BezierCurve(startPoint, controlPoint1, controlPoint2, endPoint);

    // GraphicObject
    const clonedBezierCurve = bezierCurve.clone();

    // Asset
    expect(clonedBezierCurve).toBeDefined();
    expect(clonedBezierCurve.startPoint.x).toBe(bezierCurve.startPoint.x);
    expect(clonedBezierCurve.startPoint.y).toBe(bezierCurve.startPoint.y);
    expect(clonedBezierCurve.firstControlPoint.x).toBe(bezierCurve.firstControlPoint.x);
    expect(clonedBezierCurve.firstControlPoint.y).toBe(bezierCurve.firstControlPoint.y);
    expect(clonedBezierCurve.secondControlPoint.y).toBe(bezierCurve.secondControlPoint.y);
    expect(clonedBezierCurve.secondControlPoint.y).toBe(bezierCurve.secondControlPoint.y);
    expect(clonedBezierCurve.endPoint.x).toBe(bezierCurve.endPoint.x);
    expect(clonedBezierCurve.endPoint.y).toBe(bezierCurve.endPoint.y);
  });
});
