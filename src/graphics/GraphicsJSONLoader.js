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

  CreateCircle(config) {
    const { radius, geometryStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const circle = new Circle(this.Context, point, radius);
    circle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return circle;
  }

  CreateBezierCurve(config) {
    const { geometryStyle } = config;

    const startPoint = GraphicsJSONLoader.parsePoint(config.startPoint);
    const controlPoint1 = GraphicsJSONLoader.parsePoint(config.controlPoint1);
    const controlPoint2 = GraphicsJSONLoader.parsePoint(config.controlPoint2);
    const endPoint = GraphicsJSONLoader.parsePoint(config.endPoint);

    const bezierCurve = new BezierCurve(
      this.Context, startPoint, controlPoint1, controlPoint2, endPoint,
    );
    bezierCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return bezierCurve;
  }

  CreateEllipse(config) {
    const {
      radiusX, radiusY, Rotation, geometryStyle,
    } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const ellipse = new Ellipse(this.Context, point, radiusX, radiusY, Rotation);
    ellipse.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return ellipse;
  }

  CreateRectangle(config) {
    const { height, width, geometryStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const rectangle = new Rectangle(this.Context, point, width, height);
    rectangle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return rectangle;
  }

  CreateText(config) {
    const { text, textStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

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
          return HSLAColor.FromJSON(colorStyle);
        }
        return HSLColor.FromJSON(colorStyle);
      }
      if ('red' in colorStyle) {
        if ('alpha' in colorStyle) {
          return RGBAColor.FromJSON(colorStyle);
        }
        return RGBColor.FromJSON(colorStyle);
      }
    }
    return colorStyle;
  }
} export default GraphicsJSONLoader;
