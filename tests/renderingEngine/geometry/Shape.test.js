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
  ServiceLocator.instance.register('context', undefined);
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
  it.skip('Should throw an error if internal draw is not overridden', () => {
    // Arrange

  });
  it.skip('Should properly draw the circle to the screen', () => {
    // Arrange
    const circle = new Circle(new Point(10, 20), 20);

    // Act
    circle.draw();

    // Assert
    // TODO: Make sure the internalDraw was called
  });
  it('Should properly set the point\'s x coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const circle = new Circle(point, 20);

    // Act
    circle.point.x = 45;

    // Assert
    expect(point.x).toBe(45);
  });
  it('Should properly set the point\'s y coordinate', () => {
    // Arrange
    const point = new Point(10, 20);
    const circle = new Circle(point, 20);

    // Act
    circle.point.y = 66;

    // Assert
    expect(point.y).toBe(66);
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
