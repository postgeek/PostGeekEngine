import GraphicsJSONLoader from '../../src/renderingEngine/GraphicsJSONLoader';
import ServiceLocator from '../../src/core/ServiceLocator';
import InvalidArguementError from '../../src/core/errorHandling/errors/InvalidArguementError';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', undefined);
});

describe('createCircle', () => {
  it('should throw an error when creating a circle if no parameters are passed', () => {
    // Arange
    const circleJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createCircle(JSON.parse(circleJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a circle if a point parameter is not passed', () => {
    // Arange
    const circleJson = '{"radius":20}';

    // Assert
    expect(() => { GraphicsJSONLoader.createCircle(JSON.parse(circleJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a circle if a radius is not passed', () => {
    // Arange
    const circleJson = '{"point":{"x":20,"y":30}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createCircle(JSON.parse(circleJson)); }).toThrow(InvalidArguementError);
  });
  it('should create a circle with the configuration provided', () => {
    // Arange
    const circleJson = '{"point":{"x":100,"y":150},"radius":20}';
    const x = 100;
    const y = 150;
    const radius = 20;

    // Act
    const circle = GraphicsJSONLoader.createCircle(JSON.parse(circleJson));

    // Assert
    expect(circle).toBeDefined();
    expect(circle.X).toBe(x);
    expect(circle.Y).toBe(y);
    expect(circle.Radius).toBe(radius);
  });
});

describe('createBezierCurve', () => {
  it('should create a bezier curve with the configuration provided', () => {
    // Arrange
    const bezierCurveJson = '{"startPoint":{"x":100,"y":130},"firstControlPoint":{"x":80,"y":90},"secondControlPoint":{"x":110,"y":140},"endPoint":{"x":180,"y":190}}';
    const startPointX = 100;
    const startPointY = 130;
    const firstControlPointX = 80;
    const firstControlPointY = 90;
    const secondControlPointX = 110;
    const secondControlPointY = 140;
    const endPointX = 180;
    const endPointY = 190;

    // Act
    const bezierCurve = GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson));

    // Assert
    expect(bezierCurve).toBeDefined();
    expect(bezierCurve.StartPoint.X).toBe(startPointX);
    expect(bezierCurve.StartPoint.Y).toBe(startPointY);
    expect(bezierCurve.FirstControlPoint.X).toBe(firstControlPointX);
    expect(bezierCurve.FirstControlPoint.Y).toBe(firstControlPointY);
    expect(bezierCurve.SecondControlPoint.X).toBe(secondControlPointX);
    expect(bezierCurve.SecondControlPoint.Y).toBe(secondControlPointY);
    expect(bezierCurve.EndPoint.X).toBe(endPointX);
    expect(bezierCurve.EndPoint.Y).toBe(endPointY);
  });
  it('should throw an error when creating a bezier curve if the start point parameter is not passed', () => {
    // Arrange
    const bezierCurveJson = '{"firstControlPoint":{"x":80,"y":90},"secondControlPoint":{"x":110,"y":140},"endPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a bezier curve if the first control point parameter is not passed', () => {
    // Arrange
    const bezierCurveJson = '{"startPoint":{"x":80,"y":90},"secondControlPoint":{"x":110,"y":140},"endPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a bezier curve if the second control point parameter is not passed', () => {
    // Arrange
    const bezierCurveJson = '{"startPoint":{"x":80,"y":90},"firstControlPoint":{"x":110,"y":140},"endPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a bezier curve if the end point parameter is not passed', () => {
    // Arrange
    const bezierCurveJson = '{"startPoint":{"x":80,"y":90},"firstControlPoint":{"x":110,"y":140},"secondControlPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a bezier curve if no parameters are passed', () => {
    // Arrange
    const bezierCurveJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson)); }).toThrow(InvalidArguementError);
  });
});

describe('createQuadraticCurve', () => {
  it('should create a quadratic curve with the configuration provided', () => {
    // Arrange
    const quadraticCurveJson = '{"controlPoint":{"x":100,"y":130},"startPoint":{"x":80,"y":90},"endPoint":{"x":180,"y":190}}';
    const controlPointX = 100;
    const controlPointY = 130;
    const startPointX = 80;
    const startPointY = 90;
    const endPointX = 180;
    const endPointY = 190;

    // Act
    const quadraticCurve = GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson));

    // Assert
    expect(quadraticCurve).toBeDefined();
    expect(quadraticCurve.StartPoint.X).toBe(startPointX);
    expect(quadraticCurve.StartPoint.Y).toBe(startPointY);
    expect(quadraticCurve.ControlPoint.X).toBe(controlPointX);
    expect(quadraticCurve.ControlPoint.Y).toBe(controlPointY);
    expect(quadraticCurve.EndPoint.X).toBe(endPointX);
    expect(quadraticCurve.EndPoint.Y).toBe(endPointY);
  });
  it('should throw an error when creating a quadratic curve if the control point parameter is not passed', () => {
    // Arrange
    const quadraticCurveJson = '{"startPoint":{"x":80,"y":90},"endPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a quadratic curve if the start point parameter is not passed', () => {
    // Arrange
    const quadraticCurveJson = '{"controlPoint":{"x":80,"y":90},"endPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a quadratic curve if the end point parameter is not passed', () => {
    // Arrange
    const quadraticCurveJson = '{"startPoint":{"x":80,"y":90},"controlPoint":{"x":180,"y":190}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a circle if no parameters are passed', () => {
    // Arange
    const quadraticCurveJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson)); }).toThrow(InvalidArguementError);
  });
});

describe('createEllipse', () => {
  it('should create an ellipse with the configuration provided', () => {
    // Arrange
    const ellipseJson = '{"point":{"x":120,"y":130},"radiusX":50,"radiusY":66,"rotation":0.666}';
    const pointX = 120;
    const pointY = 130;
    const radiusX = 50;
    const radiusY = 66;
    const roation = 0.666;

    // Act
    const ellipse = GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson));

    // Assert
    expect(ellipse).toBeDefined();
    expect(ellipse.Point.X).toBe(pointX);
    expect(ellipse.Point.Y).toBe(pointY);
    expect(ellipse.RadiusX).toBe(radiusX);
    expect(ellipse.RadiusY).toBe(radiusY);
    expect(ellipse.Rotation).toBe(roation);
  });
  it('should throw an error when creating an ellipse if the point parameter is not passed', () => {
    // Arrange
    const ellipseJson = '{"radiusX":50,"radiusY":75,"rotation":0.7853981633974483}';

    // Assert
    expect(() => { GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating an ellipse if the horizontal radius parameter is not passed', () => {
    // Arrange
    const ellipseJson = '{"point":{"x":300,"y":300},"radiusY":75,"rotation":0.7853981633974483}';

    // Assert
    expect(() => { GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating an ellipse if the vertical radius parameter is not passed', () => {
    // Arrange
    const ellipseJson = '{"point":{"x":300,"y":300},"radiusX":75,"rotation":0.7853981633974483}';

    // Assert
    expect(() => { GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating an ellipse if the rotation parameter is not passed', () => {
    // Arrange
    const ellipseJson = '{"point":{"x":300,"y":300},"radiusY":75,"radiusX":75}';

    // Assert
    expect(() => { GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating an ellipse if no parameters are passed', () => {
    // Arange
    const ellipseJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson)); }).toThrow(InvalidArguementError);
  });
});

describe('createRectangle', () => {
  it('should throw an error when creating a rectangle if no parameters are passed', () => {
    // Arange
    const rectangleJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a rectangle if a point parameter is not passed', () => {
    // Arange
    const rectangleJson = '{"width":3,"height":400}';

    // Assert
    expect(() => { GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a rectangle if a width is not passed', () => {
    // Arange
    const rectangleJson = '{"point":{"x":0,"y":0},"height":400}';

    // Assert
    expect(() => { GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a rectangle if a height is not passed', () => {
    // Arange
    const rectangleJson = '{"point":{"x":0,"y":0},"width":400}';

    // Assert
    expect(() => { GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson)); }).toThrow(InvalidArguementError);
  });
  it('should create a rectangle with the configuration provided', () => {
    // Arange
    const rectangleJson = '{"point":{"x":10,"y":20},"width":30,"height":40}';
    const x = 10;
    const y = 20;
    const width = 30;
    const height = 40;

    // Act
    const rectangle = GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson));

    // Assert
    expect(rectangle).toBeDefined();
    expect(rectangle.X).toBe(x);
    expect(rectangle.Y).toBe(y);
    expect(rectangle.Width).toBe(width);
    expect(rectangle.Height).toBe(height);
  });
});

describe('createText', () => {
  it('should throw an error when creating a text if no parameters are passed', () => {
    // Arange
    const textJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createText(JSON.parse(textJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a text if a point parameter is not passed', () => {
    // Arange
    const textJson = '{"text":"Hello World from JSON!"}';

    // Assert
    expect(() => { GraphicsJSONLoader.createText(JSON.parse(textJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a text if a radius is not passed', () => {
    // Arange
    const textJson = '{"point":{"x":200,"y":100}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createText(JSON.parse(textJson)); }).toThrow(InvalidArguementError);
  });
  it('should create a text with the configuration provided', () => {
    // Arange
    const textJson = '{"point":{"x":200,"y":100},"text":"Hello World from JSON!"}';
    const x = 200;
    const y = 100;
    const text = 'Hello World from JSON!';

    // Act
    const textObject = GraphicsJSONLoader.createText(JSON.parse(textJson));

    // Assert
    expect(textObject).toBeDefined();
    expect(textObject.X).toBe(x);
    expect(textObject.Y).toBe(y);
    expect(textObject.Text).toBe(text);
  });
});

describe('parsePoint2D', () => {
  it('should throw an error when parsing a point if no parameters are passed', () => {
    const pointProperty = {};
    // Assert
    expect(() => { GraphicsJSONLoader.parsePoint2D(pointProperty); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when parsing a point if no y parameter is passed', () => {
    const pointProperty = { x: 30 };
    // Assert
    expect(() => { GraphicsJSONLoader.parsePoint2D(pointProperty); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when parsing a point if no x parameter is passed', () => {
    const pointProperty = { y: 40 };
    // Assert
    expect(() => { GraphicsJSONLoader.parsePoint2D(pointProperty); }).toThrow(InvalidArguementError);
  });
  it('should properly parse a point if the correct parameters are provided', () => {
    // Arrange
    const pointProperty = { x: 30, y: 40 };
    const x = 30;
    const y = 40;

    // Act
    const point = GraphicsJSONLoader.parsePoint2D(pointProperty);

    // Assert
    expect(point).toBeDefined();
    expect(point.X).toBe(x);
    expect(point.Y).toBe(y);
  });
});

describe('parseTextStyle', () => {
  it('should throw an error when parsing a text style if no parameters are passed', () => {
    const textStyleProperty = undefined;
    // Assert
    expect(() => { GraphicsJSONLoader.parseTextStyle(textStyleProperty); }).toThrow(InvalidArguementError);
  });
  it('should properly parse a text style if the correct parameters are provided', () => {
    // Arrange
    const textStyleProperty = { strokeStyle: { name: 'Red' } };
    const strokeStyle = 'Red';

    // Act
    const textStyle = GraphicsJSONLoader.parseTextStyle(textStyleProperty);

    // Assert
    expect(textStyle).toBeDefined();
    expect(textStyle.StrokeStyle).toBe(strokeStyle);
  });
});

describe('parseGeometryStyle', () => {
  it('should throw an error when parsing a geometry style if no parameters are passed', () => {
    const geometryStyleProperty = undefined;
    // Assert
    expect(() => { GraphicsJSONLoader.parseGeometryStyle(geometryStyleProperty); }).toThrow(InvalidArguementError);
  });
  it('should properly parse a geometry style if the correct parameters are provided', () => {
    // Arrange
    const geometryStyleProperty = { strokeStyle: { name: 'Red' } };
    const strokeStyle = 'Red';

    // Act
    const geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyleProperty);

    // Assert
    expect(geometryStyle).toBeDefined();
    expect(geometryStyle.StrokeStyle).toBe(strokeStyle);
  });
});

describe('parseColor', () => {
  it('should throw an error when parsing a color if no parameters are passed', () => {
    // Arrange
    const colorProperties = {};

    // Assert
    expect(() => { GraphicsJSONLoader.parseColor(colorProperties); }).toThrow(InvalidArguementError);
  });
  it.skip('should correctly create an RGB color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {};

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
  });
  it.skip('should correctly create an RGBA color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {};

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
  });
  it.skip('should correctly create an HSL color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {};

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
  });
  it.skip('should correctly create an HSLA color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {};

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
  });
  it.skip('should correctly create an HTML color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {};

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
  });
});
