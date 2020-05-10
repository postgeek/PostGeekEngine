import Shape from '../../../src/renderingEngine/geometry/Shape';
import Circle from '../../../src/renderingEngine/geometry/Circle';
import Line from '../../../src/renderingEngine/geometry/Line';
import Ellipse from '../../../src/renderingEngine/geometry/Ellipse';
import Rectangle from '../../../src/renderingEngine/geometry/Rectangle';
import GeometryStyle from '../../../src/renderingEngine/geometry/GeometryStyle';
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
  it('Should save the current context and apply the correct stylings', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const shape = new Shape();
    const contextBeginPathSpy = jest.spyOn(context, 'beginPath');
    const contextSaveSpy = jest.spyOn(context, 'save');

    // Act
    shape.preDraw();

    // Assert
    expect(contextBeginPathSpy).toHaveBeenCalledTimes(1);
    expect(contextSaveSpy).toHaveBeenCalledTimes(1);
    // TODO: this.context = this.geometryStyle.apply(this.context);
  });
  it('Should restore the previous context and draw the shape on screen', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const shape = new Shape();
    const geometryStyle = new GeometryStyle();
    shape.geometryStyle = geometryStyle;
    const contextClosePathSpy = jest.spyOn(context, 'closePath');
    const contextRestoreSpy = jest.spyOn(context, 'restore');
    const contextFillSpy = jest.spyOn(context, 'fill');
    const contextStrokeSpy = jest.spyOn(context, 'stroke');

    // Act
    shape.postDraw();

    // Assert
    expect(contextClosePathSpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
    expect(contextFillSpy).toHaveBeenCalledTimes(0);
    expect(contextStrokeSpy).toHaveBeenCalledTimes(0);
  });
  it('Should call the context fill if there is a fillStyle', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const shape = new Shape();
    const geometryStyle = new GeometryStyle({ fillStyle: 'red' });
    shape.geometryStyle = geometryStyle;
    const contextClosePathSpy = jest.spyOn(context, 'closePath');
    const contextRestoreSpy = jest.spyOn(context, 'restore');
    const contextFillSpy = jest.spyOn(context, 'fill');
    const contextStrokeSpy = jest.spyOn(context, 'stroke');

    // Act
    shape.postDraw();

    // Assert
    expect(contextClosePathSpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
    expect(contextFillSpy).toHaveBeenCalledTimes(1);
    expect(contextStrokeSpy).toHaveBeenCalledTimes(0);
  });
  it('Should call the context stroke if there is a strokeStyle', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const shape = new Shape();
    const geometryStyle = new GeometryStyle({ strokeStyle: 'red' });
    shape.geometryStyle = geometryStyle;
    const contextClosePathSpy = jest.spyOn(context, 'closePath');
    const contextRestoreSpy = jest.spyOn(context, 'restore');
    const contextFillSpy = jest.spyOn(context, 'fill');
    const contextStrokeSpy = jest.spyOn(context, 'stroke');

    // Act
    shape.postDraw();

    // Assert
    expect(contextClosePathSpy).toHaveBeenCalledTimes(1);
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
    expect(contextFillSpy).toHaveBeenCalledTimes(0);
    expect(contextStrokeSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Line', () => {
  it('Should properly draw the line to the screen', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const line = new Line(new Point(10, 20), new Point(21, 45));
    const lineInternalDrawSpy = jest.spyOn(line, 'internalDraw');
    const contextMoveToSpy = jest.spyOn(context, 'moveTo');
    const contextLineToSpy = jest.spyOn(context, 'lineTo');

    // Act
    line.draw();

    // Assert
    expect(lineInternalDrawSpy).toHaveBeenCalledTimes(1);
    expect(contextMoveToSpy).toHaveBeenCalledTimes(1);
    expect(contextLineToSpy).toHaveBeenCalledTimes(1);
  });
  it('Should copy the given circle', () => {
    // Arrange
    const line = new Line(new Point(10, 20), new Point(21, 45));

    // GraphicObject
    const clonedLine = line.clone();

    // Asset
    expect(clonedLine).toBeDefined();
    expect(clonedLine.startPoint.x).toBe(line.startPoint.x);
    expect(clonedLine.startPoint.y).toBe(line.startPoint.y);
    expect(clonedLine.endPoint.x).toBe(line.endPoint.x);
    expect(clonedLine.endPoint.y).toBe(line.endPoint.y);
  });
});

describe('Circle', () => {
  it('Should properly draw the circle to the screen', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const circle = new Circle(new Point(10, 20), 20);
    const circleInternalDrawSpy = jest.spyOn(circle, 'internalDraw');
    const contextArcSpy = jest.spyOn(context, 'arc');

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
    const context = ServiceLocator.instance.locate('context');
    const ellipse = new Ellipse(new Point(10, 20), 20, 31, 70);
    const ellipseInternalDrawSpy = jest.spyOn(ellipse, 'internalDraw');
    const contextEllipseSpy = jest.spyOn(context, 'ellipse');

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
    const context = ServiceLocator.instance.locate('context');
    const rectangle = new Rectangle(new Point(10, 20), 20, 56);
    const rectangleInternalDraw = jest.spyOn(rectangle, 'internalDraw');
    const contextRectSpy = jest.spyOn(context, 'rect');

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
