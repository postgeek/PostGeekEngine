import Shape from '../../../src/renderingEngine/geometry/Shape';
import BezierCurve from '../../../src/renderingEngine/geometry/BezierCurve';
import Circle from '../../../src/renderingEngine/geometry/Circle';
import Ellipse from '../../../src/renderingEngine/geometry/Ellipse';
import QuadraticCurve from '../../../src/renderingEngine/geometry/QuadraticCurve';
import Rectangle from '../../../src/renderingEngine/geometry/Rectangle';
import Point from '../../../src/core/Point';

import MethodNotImplementedError from '../../../src/core/errorHandling/errors/MethodNotImplementedError';

import ContextMock from '../../mocks/ContextMock';

import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('Shape', () => {
  it('Should throw an error if internal draw is not overridden', () => {
    // Arrange
    const shape = new Shape();

    // Assert
    expect(() => { shape.internalDraw(); }).toThrow(MethodNotImplementedError);
  });
  it.skip('Should save the current context and apply the correct stylings', () => {
    // Arrange
    const shape = new Shape();

    // Act
    shape.preDraw();

    // Assert
    // TODO: Assert that the right methods have been called
  });
  it.skip('Should restore the previous context and draw the shape on screen', () => {
    // Arrange
    const shape = new Shape();

    // Act
    shape.postDraw();

    // Assert
    // TODO: Assert that the right methods have been called
  });
});

describe('Circle', () => {
  it('Should properly draw the circle to the screen', () => {
    // Arrange
    const circle = new Circle(new Point(10, 20), 20);
    const fooSpy = jest.spyOn(Circle.prototype, 'internalDraw');

    // Act
    circle.draw();

    // Assert
    expect(fooSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set the point\'s x coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const circle = new Circle(point, 20);
    const newX = 45;

    // Act
    circle.x = newX;

    // Assert
    expect(circle.point.x).toBe(newX);
    expect(point.x).toBe(newX);
    expect(circle.x).toBe(newX);
  });
  it('Should properly set the point\'s y coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const circle = new Circle(point, 20);
    const newY = 66;

    // Act
    circle.y = newY;

    // Assert
    expect(circle.point.y).toBe(newY);
    expect(point.y).toBe(newY);
    expect(circle.y).toBe(newY);
  });
  it('Should copy the given circle', () => {
    // Arrange
    const circle = new Circle(new Point(10, 20), 20);

    // GraphicObject
    const clonedCircle = circle.clone();

    // Asset
    expect(clonedCircle).toBeDefined();
    expect(clonedCircle.point.x).toBe(circle.point.x);
    expect(clonedCircle.point.y).toBe(circle.point.y);
    expect(clonedCircle.radius).toBe(circle.radius);
  });
});

describe('Ellipse', () => {
  it('Should properly draw the ellipse to the screen', () => {
    // Arrange
    const ellipse = new Ellipse(new Point(10, 20), 20, 31, 70);
    const fooSpy = jest.spyOn(Ellipse.prototype, 'internalDraw');

    // Act
    ellipse.draw();

    // Assert
    expect(fooSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set the point\'s x coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const ellipse = new Ellipse(point, 20, 45, 49);
    const newX = 45;

    // Act
    ellipse.x = newX;

    // Assert
    expect(ellipse.point.x).toBe(newX);
    expect(point.x).toBe(newX);
    expect(ellipse.x).toBe(newX);
  });
  it('Should properly set the point\'s y coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const ellipse = new Ellipse(point, 20);
    const newY = 66;

    // Act
    ellipse.y = newY;

    // Assert
    expect(ellipse.point.y).toBe(newY);
    expect(point.y).toBe(newY);
    expect(ellipse.y).toBe(newY);
  });
  it('Should copy the given ellipse', () => {
    // Arrange
    const ellipse = new Ellipse(new Point(10, 20), 20, 56, 75);

    // GraphicObject
    const clonedEllipse = ellipse.clone();

    // Asset
    expect(clonedEllipse).toBeDefined();
    expect(clonedEllipse.point.x).toBe(ellipse.point.x);
    expect(clonedEllipse.point.y).toBe(ellipse.point.y);
    expect(clonedEllipse.radiusX).toBe(ellipse.radiusX);
    expect(clonedEllipse.radiusY).toBe(ellipse.radiusY);
    expect(clonedEllipse.rotation).toBe(ellipse.rotation);
  });
});

describe('Rectangle', () => {
  it('Should properly draw the rectangle to the screen', () => {
    // Arrange
    const rectangle = new Rectangle(new Point(10, 20), 20, 56);
    const fooSpy = jest.spyOn(Rectangle.prototype, 'internalDraw');

    // Act
    rectangle.draw();

    // Assert
    expect(fooSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set the point\'s x coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const rectangle = new Rectangle(point, 20, 89);
    const newX = 45;

    // Act
    rectangle.x = newX;

    // Assert
    expect(rectangle.point.x).toBe(newX);
    expect(point.x).toBe(newX);
    expect(rectangle.x).toBe(newX);
  });
  it('Should properly set the point\'s y coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const rectangle = new Rectangle(point, 20, 90);
    const newY = 66;

    // Act
    rectangle.y = newY;

    // Assert
    expect(rectangle.point.y).toBe(newY);
    expect(point.y).toBe(newY);
    expect(rectangle.y).toBe(newY);
  });
  it('Should copy the given rectangle', () => {
    // Arrange
    const rectangle = new Rectangle(new Point(10, 20), 20, 65);

    // GraphicObject
    const clonedRectangle = rectangle.clone();

    // Asset
    expect(clonedRectangle).toBeDefined();
    expect(clonedRectangle.point.x).toBe(rectangle.point.x);
    expect(clonedRectangle.point.y).toBe(rectangle.point.y);
    expect(clonedRectangle.width).toBe(rectangle.width);
    expect(clonedRectangle.height).toBe(rectangle.height);
  });
});

describe('QuadraticCurve', () => {
  // startPoint, controlPoint, endPoint
  it('Should properly draw the quadraticCurve to the screen', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint = new Point(54, 23);
    const endPoint = new Point(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const fooSpy = jest.spyOn(QuadraticCurve.prototype, 'internalDraw');

    // Act
    quadraticCurve.draw();

    // Assert
    expect(fooSpy).toHaveBeenCalledTimes(1);
  });
  it('Should properly set startPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint = new Point(54, 23);
    const endPoint = new Point(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newStartPoint = new Point(123, 432);

    // Act
    quadraticCurve.startPoint = newStartPoint;

    // Assert
    expect(quadraticCurve.startPoint.x).toBe(newStartPoint.x);
    expect(quadraticCurve.startPoint.y).toBe(newStartPoint.y);
  });
  it('Should properly set the controlPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint = new Point(54, 23);
    const endPoint = new Point(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newControlPoint = new Point(123, 231);

    // Act
    quadraticCurve.controlPoint = newControlPoint;

    // Assert
    expect(quadraticCurve.controlPoint.x).toBe(newControlPoint.x);
    expect(quadraticCurve.controlPoint.y).toBe(newControlPoint.y);
  });
  it('Should properly set the endPoint', () => {
    // Arrange
    const startPoint = new Point(48, 34);
    const controlPoint = new Point(54, 23);
    const endPoint = new Point(65, 89);
    const quadraticCurve = new QuadraticCurve(startPoint, controlPoint, endPoint);
    const newEndPoint = new Point(192, 234);

    // Act
    quadraticCurve.endPoint = newEndPoint;

    // Assert
    expect(quadraticCurve.endPoint.x).toBe(newEndPoint.x);
    expect(quadraticCurve.endPoint.y).toBe(newEndPoint.y);
  });
  it.skip('Should copy the given quadraticCurve', () => {
    // Arrange
    const quadraticCurve = new QuadraticCurve(new Point(10, 20), 20, 65);

    // GraphicObject
    const clonedQuadraticCurve = quadraticCurve.clone();

    // Asset
    expect(clonedQuadraticCurve).toBeDefined();
    expect(clonedQuadraticCurve.point.x).toBe(quadraticCurve.point.x);
    expect(clonedQuadraticCurve.point.y).toBe(quadraticCurve.point.y);
  });
});
