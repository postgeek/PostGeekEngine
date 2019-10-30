import QuadraticCurve from '../../../src/renderingEngine/geometry/QuadraticCurve';
import Vec2D from '../../../src/core/Vec2D';

import ContextMock from '../../mocks/ContextMock';

import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('QuadraticCurve', () => {
  // startPoint, controlPoint, endPoint
  it('Should properly draw the quadraticCurve to the screen', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const startPoint = new Vec2D(48, 34);
    const controlPoint = new Vec2D(54, 23);
    const endPoint = new Vec2D(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const quadraticCurveInternalDrawSpy = jest.spyOn(quadraticCurve, 'internalDraw');
    const contextMoveToSpy = jest.spyOn(context, 'moveTo');
    const contextQuadraticCurveToSpy = jest.spyOn(context, 'quadraticCurveTo');


    // Act
    quadraticCurve.draw();

    // Assert
    expect(quadraticCurveInternalDrawSpy).toHaveBeenCalledTimes(1);
    //  expect(contextMoveToSpy).toHaveBeenCalledTimes(1);
    expect(contextQuadraticCurveToSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set startPoint', () => {
    // Arrange
    const startPoint = new Vec2D(48, 34);
    const controlPoint = new Vec2D(54, 23);
    const endPoint = new Vec2D(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newStartPoint = new Vec2D(123, 432);

    // Act
    quadraticCurve.startPoint = newStartPoint;

    // Assert
    expect(quadraticCurve.startPoint.x).toBe(newStartPoint.x);
    expect(quadraticCurve.startPoint.y).toBe(newStartPoint.y);
  });
  it('Should properly set the controlPoint', () => {
    // Arrange
    const startPoint = new Vec2D(48, 34);
    const controlPoint = new Vec2D(54, 23);
    const endPoint = new Vec2D(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newControlPoint = new Vec2D(123, 231);

    // Act
    quadraticCurve.controlPoint = newControlPoint;

    // Assert
    expect(quadraticCurve.controlPoint.x).toBe(newControlPoint.x);
    expect(quadraticCurve.controlPoint.y).toBe(newControlPoint.y);
  });
  it('Should properly set the endPoint', () => {
    // Arrange
    const startPoint = new Vec2D(48, 34);
    const controlPoint = new Vec2D(54, 23);
    const endPoint = new Vec2D(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newEndPoint = new Vec2D(192, 234);

    // Act
    quadraticCurve.endPoint = newEndPoint;

    // Assert
    expect(quadraticCurve.endPoint.x).toBe(newEndPoint.x);
    expect(quadraticCurve.endPoint.y).toBe(newEndPoint.y);
  });
  it('Should copy the given quadraticCurve', () => {
    // Arrange
    const startPoint = new Vec2D(48, 34);
    const controlPoint = new Vec2D(54, 23);
    const endPoint = new Vec2D(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);

    // GraphicObject
    const clonedQuadraticCurve = quadraticCurve.clone();

    // Asset
    expect(clonedQuadraticCurve).toBeDefined();
    expect(clonedQuadraticCurve.startPoint.x).toBe(quadraticCurve.startPoint.x);
    expect(clonedQuadraticCurve.startPoint.y).toBe(quadraticCurve.startPoint.y);
    expect(clonedQuadraticCurve.controlPoint.x).toBe(quadraticCurve.controlPoint.x);
    expect(clonedQuadraticCurve.controlPoint.y).toBe(quadraticCurve.controlPoint.y);
    expect(clonedQuadraticCurve.endPoint.x).toBe(quadraticCurve.endPoint.x);
    expect(clonedQuadraticCurve.endPoint.y).toBe(quadraticCurve.endPoint.y);
  });
});
