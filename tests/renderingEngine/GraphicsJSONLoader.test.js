import GraphicsJSONLoader from '../../src/renderingEngine/GraphicsJSONLoader';
import ServiceLocator from '../../src/core/ServiceLocator';
import InvalidArguementError from '../../src/core/errorHandling/errors/InvalidArguementError';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', undefined);
});

describe('createLine', () => {
  it('should throw an error when creating a line if no parameters are passed', () => {
    // Arrange
    const lineJson = '{}';

    // Assert
    expect(() => { GraphicsJSONLoader.createLine(JSON.parse(lineJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a line if no startPoint is passed', () => {
    // Arrange
    const lineJson = '{"endPoint":{"x":50,"y":50}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createLine(JSON.parse(lineJson)); }).toThrow(InvalidArguementError);
  });
  it('should throw an error when creating a line if no endPoint is passed', () => {
    // Arrange
    const lineJson = '{"startPoint":{"x":50,"y":50}}';

    // Assert
    expect(() => { GraphicsJSONLoader.createLine(JSON.parse(lineJson)); }).toThrow(InvalidArguementError);
  });
  it('should create a line with the configuration provided', () => {
    // Arrange
    const lineJson = '{"startPoint":{"x":231,"y":745},"endPoint":{"x":123,"y":456}}';
    const startX = 231;
    const startY = 745;
    const endX = 123;
    const endY = 456;

    // Assert
    const line = GraphicsJSONLoader.createLine(JSON.parse(lineJson));

    // Assert
    expect(line).toBeDefined();
    expect(line.startPoint.x).toBe(startX);
    expect(line.startPoint.y).toBe(startY);
    expect(line.endPoint.x).toBe(endX);
    expect(line.endPoint.y).toBe(endY);
  });
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
    expect(circle.point.x).toBe(x);
    expect(circle.point.y).toBe(y);
    expect(circle.radius).toBe(radius);
  });
  it('should create a circle with the  provided geometryStyle', () => {
    // Arange
    const circleJson = '{"point":{"x":100,"y":150},"radius":20, "geometryStyle":{"strokeStyle":{"hue":195,"saturation":53,"lightness":79,"alpha":1},"lineWidth":3}}';
    const x = 100;
    const y = 150;
    const radius = 20;
    const hue = 195;
    const saturation = 53;
    const lightness = 79;
    const alpha = 1;
    const lineWidth = 3;

    // Act
    const circle = GraphicsJSONLoader.createCircle(JSON.parse(circleJson));

    // Assert
    expect(circle).toBeDefined();
    expect(circle.geometryStyle.strokeStyle.hue).toBe(hue);
    expect(circle.geometryStyle.strokeStyle.saturation).toBe(saturation);
    expect(circle.geometryStyle.strokeStyle.lightness).toBe(lightness);
    expect(circle.geometryStyle.strokeStyle.alpha).toBe(alpha);
    expect(circle.geometryStyle.lineWidth).toBe(lineWidth);
  });
});

describe('createBezierCurve', () => {
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
    expect(bezierCurve.startPoint.x).toBe(startPointX);
    expect(bezierCurve.startPoint.y).toBe(startPointY);
    expect(bezierCurve.firstControlPoint.x).toBe(firstControlPointX);
    expect(bezierCurve.firstControlPoint.y).toBe(firstControlPointY);
    expect(bezierCurve.secondControlPoint.x).toBe(secondControlPointX);
    expect(bezierCurve.secondControlPoint.y).toBe(secondControlPointY);
    expect(bezierCurve.endPoint.x).toBe(endPointX);
    expect(bezierCurve.endPoint.y).toBe(endPointY);
  });
  it('should create a bezier curve with the provided geometryStyle', () => {
    // Arrange
    const bezierCurveJson = '{"startPoint":{"x":100,"y":130},"firstControlPoint":{"x":80,"y":90},"secondControlPoint":{"x":110,"y":140},"endPoint":{"x":180,"y":190},"geometryStyle":{"strokeStyle":{"hue":32,"saturation":64,"lightness":78,"alpha":0.66},"lineWidth":4}}';
    const hue = 32;
    const saturation = 64;
    const lightness = 78;
    const alpha = 0.66;
    const lineWidth = 4;

    // Act
    const bezierCurve = GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson));

    // Assert
    expect(bezierCurve.geometryStyle).toBeDefined();
    expect(bezierCurve.geometryStyle.strokeStyle.hue).toBe(hue);
    expect(bezierCurve.geometryStyle.strokeStyle.saturation).toBe(saturation);
    expect(bezierCurve.geometryStyle.strokeStyle.lightness).toBe(lightness);
    expect(bezierCurve.geometryStyle.strokeStyle.alpha).toBe(alpha);
    expect(bezierCurve.geometryStyle.lineWidth).toBe(lineWidth);
  });
});

describe('createQuadraticCurve', () => {
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
    expect(quadraticCurve.startPoint.x).toBe(startPointX);
    expect(quadraticCurve.startPoint.y).toBe(startPointY);
    expect(quadraticCurve.controlPoint.x).toBe(controlPointX);
    expect(quadraticCurve.controlPoint.y).toBe(controlPointY);
    expect(quadraticCurve.endPoint.x).toBe(endPointX);
    expect(quadraticCurve.endPoint.y).toBe(endPointY);
  });
  it('should create a quadratic curve with the provided geometryStyle', () => {
    // Arrange
    const quadraticCurveJson = '{"controlPoint":{"x":100,"y":130},"startPoint":{"x":80,"y":90},"endPoint":{"x":180,"y":190},"geometryStyle":{"strokeStyle":{"hue":32,"saturation":64,"lightness":78,"alpha":0.66},"lineWidth":4}}';
    const hue = 32;
    const saturation = 64;
    const lightness = 78;
    const alpha = 0.66;
    const lineWidth = 4;

    // Act
    const quadraticCurve = GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson));

    // Assert
    expect(quadraticCurve.geometryStyle).toBeDefined();
    expect(quadraticCurve.geometryStyle.strokeStyle.hue).toBe(hue);
    expect(quadraticCurve.geometryStyle.strokeStyle.saturation).toBe(saturation);
    expect(quadraticCurve.geometryStyle.strokeStyle.lightness).toBe(lightness);
    expect(quadraticCurve.geometryStyle.strokeStyle.alpha).toBe(alpha);
    expect(quadraticCurve.geometryStyle.lineWidth).toBe(lineWidth);
  });
});

describe('createEllipse', () => {
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
    expect(ellipse.point.x).toBe(pointX);
    expect(ellipse.point.y).toBe(pointY);
    expect(ellipse.radiusX).toBe(radiusX);
    expect(ellipse.radiusY).toBe(radiusY);
    expect(ellipse.rotation).toBe(roation);
  });
  it('should create an ellipse with the provided geometryStyle()', () => {
    // Arrange
    const ellipseJson = '{"point":{"x":120,"y":130},"radiusX":50,"radiusY":66,"rotation":0.666,"geometryStyle":{"strokeStyle":{"hue":32,"saturation":64,"lightness":78,"alpha":0.66},"lineWidth":4}}';
    const hue = 32;
    const saturation = 64;
    const lightness = 78;
    const alpha = 0.66;
    const lineWidth = 4;

    // Act
    const ellipse = GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson));

    // Assert
    expect(ellipse.geometryStyle).toBeDefined();
    expect(ellipse.geometryStyle.strokeStyle.hue).toBe(hue);
    expect(ellipse.geometryStyle.strokeStyle.saturation).toBe(saturation);
    expect(ellipse.geometryStyle.strokeStyle.lightness).toBe(lightness);
    expect(ellipse.geometryStyle.strokeStyle.alpha).toBe(alpha);
    expect(ellipse.geometryStyle.lineWidth).toBe(lineWidth);
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
    expect(rectangle.x).toBe(x);
    expect(rectangle.y).toBe(y);
    expect(rectangle.width).toBe(width);
    expect(rectangle.height).toBe(height);
  });
  it('should create a rectangle with the provided geometryStyle', () => {
    // Arange
    const rectangleJson = '{"point":{"x":10,"y":20},"width":30,"height":40,"geometryStyle":{"strokeStyle":{"hue":32,"saturation":64,"lightness":78,"alpha":0.66},"lineWidth":4}}';
    const hue = 32;
    const saturation = 64;
    const lightness = 78;
    const alpha = 0.66;
    const lineWidth = 4;

    // Act
    const rectangle = GraphicsJSONLoader.createRectangle(JSON.parse(rectangleJson));

    // Assert
    expect(rectangle.geometryStyle).toBeDefined();
    expect(rectangle.geometryStyle.strokeStyle.hue).toBe(hue);
    expect(rectangle.geometryStyle.strokeStyle.saturation).toBe(saturation);
    expect(rectangle.geometryStyle.strokeStyle.lightness).toBe(lightness);
    expect(rectangle.geometryStyle.strokeStyle.alpha).toBe(alpha);
    expect(rectangle.geometryStyle.lineWidth).toBe(lineWidth);
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
    expect(textObject.x).toBe(x);
    expect(textObject.y).toBe(y);
    expect(textObject.text).toBe(text);
  });
  it('should create a text with the provided textStyle', () => {
    // Arange
    const textJson = '{"point":{"x":200,"y":100},"text":"Hello World from JSON!","textStyle":{"fillStyle":{"hue":32,"saturation":64,"lightness":78,"alpha":0.66},"lineWidth":4}}';
    const hue = 32;
    const saturation = 64;
    const lightness = 78;
    const alpha = 0.66;
    const lineWidth = 4;

    // Act
    const textObject = GraphicsJSONLoader.createText(JSON.parse(textJson));

    // Assert
    expect(textObject.textStyle).toBeDefined();
    expect(textObject.textStyle.fillStyle.hue).toBe(hue);
    expect(textObject.textStyle.fillStyle.saturation).toBe(saturation);
    expect(textObject.textStyle.fillStyle.lightness).toBe(lightness);
    expect(textObject.textStyle.fillStyle.alpha).toBe(alpha);
    expect(textObject.textStyle.lineWidth).toBe(lineWidth);
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
    expect(point.x).toBe(x);
    expect(point.y).toBe(y);
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

describe('parsegeometryStyle', () => {
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
  it('should correctly create an RGB color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = { red: 200, blue: 66, green: 230 };
    const red = 200;
    const blue = 66;
    const green = 230;

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
    expect(color.red).toBe(red);
    expect(color.green).toBe(green);
    expect(color.blue).toBe(blue);
  });
  it('should correctly create an RGBA color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {
      red: 200, blue: 66, green: 230, alpha: 0.4,
    };
    const red = 200;
    const blue = 66;
    const green = 230;
    const alpha = 0.4;

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
    expect(color.red).toBe(red);
    expect(color.green).toBe(green);
    expect(color.blue).toBe(blue);
    expect(color.alpha).toBe(alpha);
  });
  // hue, lightness, saturation,
  it('should correctly create an HSL color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = { hue: 30, lightness: 66, saturation: 90 };
    const hue = 30;
    const lightness = 66;
    const saturation = 90;

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
    expect(color.hue).toBe(hue);
    expect(color.lightness).toBe(lightness);
    expect(color.saturation).toBe(saturation);
  });
  it('should correctly create an HSLA color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = {
      hue: 30, lightness: 66, saturation: 90, alpha: 0.66,
    };
    const hue = 30;
    const lightness = 66;
    const saturation = 90;
    const alpha = 0.66;

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
    expect(color.hue).toBe(hue);
    expect(color.lightness).toBe(lightness);
    expect(color.saturation).toBe(saturation);
    expect(color.alpha).toBe(alpha);
  });
  it('should correctly create an HTML color if the correct parameters are provided', () => {
    // Arrange
    const colorProperties = { name: 'blue' };
    const colorName = 'blue';

    // Act
    const color = GraphicsJSONLoader.parseColor(colorProperties);

    // Assert
    expect(color).toBeDefined();
    expect(color).toBe(colorName);
  });
});
