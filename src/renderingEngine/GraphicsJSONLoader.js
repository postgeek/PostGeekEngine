import Circle from './geometry/Circle';
import Rectangle from './geometry/Rectangle';
import Ellipse from './geometry/Ellipse';
import BezierCurve from './geometry/BezierCurve';
import QuadraticCurve from './geometry/QuadraticCurve';
import GeometryStyle from './geometry/GeometryStyle';

import Text from './text/Text';
import TextStyle from './text/TextStyle';

import HSLAColor from './colors/HSLAColor';
import HSLColor from './colors/HSLColor';
import RGBAColor from './colors/RGBAColor';
import RGBColor from './colors/RGBColor';

import Point from '../physicsEngine/Point';
import ServiceLocator from '../core/ServiceLocator';

/**
 * The graphic objects JSON loader
 */
class GraphicsJSONLoader {
  
  /**
   * Creates a circle with the supplied properties
   *
   * @param  {string} config The JSON configuration for the circle
   * @return {Circle}        The newly created circle
   */
  CreateCircle(config) {
    const { radius, geometryStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const circle = new Circle(point, radius);
    circle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return circle;
  }

  /**
   * Creates a bezier curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {BezierCurve}    The newly created bezier curve
   */
  CreateBezierCurve(config) {
    const { geometryStyle } = config;

    const startPoint = GraphicsJSONLoader.parsePoint(config.startPoint);
    const controlPoint1 = GraphicsJSONLoader.parsePoint(config.controlPoint1);
    const controlPoint2 = GraphicsJSONLoader.parsePoint(config.controlPoint2);
    const endPoint = GraphicsJSONLoader.parsePoint(config.endPoint);

    const bezierCurve = new BezierCurve(
      startPoint, controlPoint1, controlPoint2, endPoint,
    );
    bezierCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return bezierCurve;
  }

  /**
   * Creates a quadratic curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {QuadraticCurve} The newly created quadratic curve
   */
  CreateQuadraticCurve(config) {
    const { geometryStyle } = config;

    const startPoint = GraphicsJSONLoader.parsePoint(config.startPoint);
    const controlPoint = GraphicsJSONLoader.parsePoint(config.controlPoint);
    const endPoint = GraphicsJSONLoader.parsePoint(config.endPoint);

    const quadraticCurve = new QuadraticCurve(
      startPoint, controlPoint, endPoint,
    );
    quadraticCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return quadraticCurve;
  }


  /**
   * Creates a new ellipse with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the ellipse
   * @return {Ellipse}        The newly created ellipse
   */
  CreateEllipse(config) {
    const {
      radiusX, radiusY, Rotation, geometryStyle,
    } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const ellipse = new Ellipse(point, radiusX, radiusY, Rotation);
    ellipse.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return ellipse;
  }

  /**
   * Creates a new rectangle with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the rectangle
   * @return {Rectangle}      The newly created rectangle
   */
  CreateRectangle(config) {
    const { height, width, geometryStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const rectangle = new Rectangle(point, width, height);
    rectangle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return rectangle;
  }

  /**
   * Creates a new text with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the text
   * @return {Text}           The newly created text
   */
  CreateText(config) {
    const { text, textStyle } = config;
    const point = GraphicsJSONLoader.parsePoint(config.point);

    const textObject = new Text(point, text);
    textObject.TextStyle = GraphicsJSONLoader.parseTextStyle(textStyle);

    return textObject;
  }


  /**
   * @static parse the point
   *
   * @param  {string} pointJson The JSON for the point
   * @return {Point}            The created Point object
   */
  static parsePoint(pointJson) {
    const { x, y } = pointJson;
    return new Point(x, y);
  }


  /**
   * @static parse the text styling
   *
   * @param  {string} textStyle The JSON for the text styling
   * @return {TextStyle}        The created TextStyle object
   */
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

  /**
   * @static parse the geometry styling
   *
   * @param  {string} geometryStyle   The JSON for the geometry styling
   * @return {GeometryStyle}          The created GeometryStyle object
   */
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

  /**
   * @static parse the color
   *
   * @param  {string} colorStyle   The JSON for the color styling
   * @return {GeometryStyle}       The created Color object
   */
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
