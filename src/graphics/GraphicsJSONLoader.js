import Circle from './geometry/Circle';
import Rectangle from './geometry/Rectangle';
import Ellipse from './geometry/Ellipse';
import BezierCurve from './geometry/BezierCurve';
import GeometryStyle from './geometry/GeometryStyle';

import Text from './text/Text';
import TextStyle from './text/TextStyle';

import HSLAColor from './colors/HSLAColor';
import HSLColor from './colors/HSLColor';
import RGBAColor from './colors/RGBAColor';
import RGBColor from './colors/RGBColor';

import Point from '../physics/Point';

class GraphicsJSONLoader {
  constructor(context) {
    this.Context = context;
  }

  LoadCircle(circleJSON) {
    const parsedCircleJSON = JSON.parse(circleJSON);

    const { radius, geometryStyle } = parsedCircleJSON;
    const point = GraphicsJSONLoader.parsePoint(parsedCircleJSON.point);

    const circle = new Circle(this.Context, point, radius);
    circle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return circle;
  }

  LoadBezierCurve(bezierCurveJson) {
    const parsedBezierCurveJson = JSON.parse(bezierCurveJson);

    const { geometryStyle } = parsedBezierCurveJson;

    const startPoint = GraphicsJSONLoader.parsePoint(parsedBezierCurveJson.startPoint);
    const controlPoint1 = GraphicsJSONLoader.parsePoint(parsedBezierCurveJson.controlPoint1);
    const controlPoint2 = GraphicsJSONLoader.parsePoint(parsedBezierCurveJson.controlPoint2);
    const endPoint = GraphicsJSONLoader.parsePoint(parsedBezierCurveJson.endPoint);

    const bezierCurve = new BezierCurve(
      this.Context, startPoint, controlPoint1, controlPoint2, endPoint,
    );
    bezierCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return bezierCurve;
  }

  LoadEllipse(ellipseJSON) {
    const parsedEllipseJSON = JSON.parse(ellipseJSON);

    const {
      radiusX, radiusY, Rotation, geometryStyle,
    } = parsedEllipseJSON;
    const point = GraphicsJSONLoader.parsePoint(parsedEllipseJSON.point);

    const ellipse = new Ellipse(this.Context, point, radiusX, radiusY, Rotation);
    ellipse.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return ellipse;
  }

  LoadRectangle(rectangleJSON) {
    const parsedRectangleJSON = JSON.parse(rectangleJSON);

    const { height, width, geometryStyle } = parsedRectangleJSON;
    const point = GraphicsJSONLoader.parsePoint(parsedRectangleJSON.point);

    const rectangle = new Rectangle(this.Context, point, width, height);
    rectangle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return rectangle;
  }

  LoadText(textJSON) {
    const parsedTextJSON = JSON.parse(textJSON);

    const { text, textStyle } = parsedTextJSON;
    const point = GraphicsJSONLoader.parsePoint(parsedTextJSON.point);

    const textObject = new Text(this.Context, point, text);
    textObject.TextStyle = GraphicsJSONLoader.parseTextStyle(textStyle);

    return textObject;
  }

  static parsePoint(pointJson) {
    const { x, y } = pointJson;
    return new Point(x, y);
  }

  static parseTextStyle(textStyle) {
    const parsedTextStyle = textStyle;
    const { strokeStyle, fillStyle } = parsedTextStyle;

    if (strokeStyle !== undefined) {
      parsedTextStyle.strokeStyle = GraphicsJSONLoader.parseColor(strokeStyle);
    }
    if (fillStyle !== undefined) {
      parsedTextStyle.fillStyle = GraphicsJSONLoader.parseColor(fillStyle);
    }

    return new TextStyle(parsedTextStyle);
  }

  static parseGeometryStyle(geometryStyle) {
    const parsedGeometryStyle = geometryStyle;
    const { strokeStyle, fillStyle } = parsedGeometryStyle;

    if (strokeStyle !== undefined) {
      parsedGeometryStyle.strokeStyle = GraphicsJSONLoader.parseColor(strokeStyle);
    }
    if (fillStyle !== undefined) {
      parsedGeometryStyle.fillStyle = GraphicsJSONLoader.parseColor(fillStyle);
    }

    return new GeometryStyle(parsedGeometryStyle);
  }

  static parseColor(colorStyle) {
    if (typeof colorStyle === 'object') {
      if ('hue' in colorStyle) {
        if ('alpha' in colorStyle) {
          return HSLAColor.ParseJSON(colorStyle);
        }
        return HSLColor.ParseJSON(colorStyle);
      }
      if ('red' in colorStyle) {
        if ('alpha' in colorStyle) {
          return RGBAColor.ParseJSON(colorStyle);
        }
        return RGBColor.ParseJSON(colorStyle);
      }
    }
    return colorStyle;
  }
} export default GraphicsJSONLoader;
