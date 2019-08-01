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
    const contextBeginPathSpy = jest.spyOn(ContextMock.prototype, 'beginPath');
    const contextSaveSpy = jest.spyOn(ContextMock.prototype, 'save');

    // Act
    shape.preDraw();

    // Assert
    expect(contextBeginPathSpy).toHaveBeenCalledTimes(1);
    expect(contextSaveSpy).toHaveBeenCalledTimes(1);
    // TODO: this.context = this.geometryStyle.apply(this.context);
  });
  it.skip('Should restore the previous context and draw the shape on screen', () => {
    // Arrange
    const shape = new Shape();
    const contextClosePathSpy = jest.spyOn(ContextMock.prototype, 'closePath');
    const contextRestoreSpy = jest.spyOn(ContextMock.prototype, 'restore');
    const contextFillSpy = jest.spyOn(ContextMock.prototype, 'fill');
    const contextStrokeSpy = jest.spyOn(ContextMock.prototype, 'stroke');

    // Act
    shape.postDraw();

    // Assert
    expect(contextClosePathSpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
    expect(contextFillSpy).toHaveBeenCalledTimes(0);
    expect(contextStrokeSpy).toHaveBeenCalledTimes(0);
  });
  it.skip('Should call the context fill if there is a fillStyle', () => {
    /*
TODO: Write this test
if (this.geometryStyle.fillStyle !== undefined) {
  this.context.fill();
}
*/
  });
  it.skip('Should call the context stroke if there is a strokeStyle', () => {
    /*
    TODO: Write this test
    if (this.geometryStyle.strokeStyle !== undefined) {
      this.context.stroke();
    }
    */
  });
});

describe('Circle', () => {
  it('Should properly draw the circle to the screen', () => {
    // Arrange
    const circle = new Circle(new Point(10, 20), 20);
    const circleInternalDrawSpy = jest.spyOn(Circle.prototype, 'internalDraw');
    const contextArcSpy = jest.spyOn(ContextMock.prototype, 'arc');

    // Act
    circle.draw();

    // Assert
    expect(circleInternalDrawSpy).toHaveBeenCalledTimes(1);
    expect(contextArcSpy).toHaveBeenCalledTimes(1);
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
    const ellipseInternalDrawSpy = jest.spyOn(Ellipse.prototype, 'internalDraw');
    const contextEllipseSpy = jest.spyOn(ContextMock.prototype, 'ellipse');

    // Act
    ellipse.draw();

    // Assert
    expect(ellipseInternalDrawSpy).toHaveBeenCalledTimes(1);
    expect(contextEllipseSpy).toHaveBeenCalledTimes(1);
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
    const rectangleInternalDraw = jest.spyOn(Rectangle.prototype, 'internalDraw');
    const contextRectSpy = jest.spyOn(ContextMock.prototype, 'rect');

    // Act
    rectangle.draw();

    // Assert
    expect(rectangleInternalDraw).toHaveBeenCalledTimes(1);
    expect(contextRectSpy).toHaveBeenCalledTimes(1);
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
