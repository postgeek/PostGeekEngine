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

/**
 * The graphic objects JSON loader
 */
class GraphicsJSONLoader {
  /**
   * @static Creates a circle with the supplied properties
   *
   * @param  {string} config The JSON configuration for the circle
   * @return {Circle}        The newly created circle
   */
  static createCircle({ radius, point, geometryStyle }) {
    const parsedPoint = GraphicsJSONLoader.parsePoint2D(point);
    const circle = new Circle(parsedPoint, radius);
    circle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return circle;
  }

  /**
   * @static Creates a bezier curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {BezierCurve}    The newly created bezier curve
   */
  static createBezierCurve({
    startPoint,
    firstControlPoint,
    secondControlPoint,
    endPoint,
    geometryStyle,
  }) {
    const parsedStartPoint = GraphicsJSONLoader.parsePoint2D(startPoint);
    const parsedFirstControlPoint = GraphicsJSONLoader.parsePoint2D(firstControlPoint);
    const parsedSecondControlPoint = GraphicsJSONLoader.parsePoint2D(secondControlPoint);
    const parsedEndPoint = GraphicsJSONLoader.parsePoint2D(endPoint);

    const bezierCurve = new BezierCurve(
      parsedStartPoint, parsedFirstControlPoint, parsedSecondControlPoint, parsedEndPoint,
    );
    bezierCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return bezierCurve;
  }

  /**
   * @static Creates a quadratic curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {QuadraticCurve} The newly created quadratic curve
   */
  static createQuadraticCurve({
    startPoint,
    controlPoint,
    endPoint,
    geometryStyle,
  }) {
    const parsedStartPoint = GraphicsJSONLoader.parsePoint2D(startPoint);
    const parsedControlPoint = GraphicsJSONLoader.parsePoint2D(controlPoint);
    const parsedEndPoint = GraphicsJSONLoader.parsePoint2D(endPoint);

    const quadraticCurve = new QuadraticCurve(
      parsedStartPoint, parsedControlPoint, parsedEndPoint,
    );
    quadraticCurve.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return quadraticCurve;
  }


  /**
   * @static Creates a new ellipse with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the ellipse
   * @return {Ellipse}        The newly created ellipse
   */
  static createEllipse({
    radiusX, radiusY, rotation, geometryStyle, point,
  } = {}) {
    const newPoint = GraphicsJSONLoader.parsePoint2D(point);
    const ellipse = new Ellipse(newPoint, radiusX, radiusY, rotation);
    ellipse.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return ellipse;
  }

  /**
   * @static Creates a new rectangle with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the rectangle
   * @return {Rectangle}      The newly created rectangle
   */
  static createRectangle({
    point, height, width, geometryStyle,
  }) {
    const parsedPoint = GraphicsJSONLoader.parsePoint2D(point);

    const rectangle = new Rectangle(parsedPoint, width, height);
    rectangle.GeometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);

    return rectangle;
  }

  /**
   * @static Creates a new text with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the text
   * @return {Text}           The newly created text
   */
  static createText({ point, text, textStyle }) {
    const parsedPoint = GraphicsJSONLoader.parsePoint2D(point);

    const textObject = new Text(parsedPoint, text);
    textObject.TextStyle = GraphicsJSONLoader.parseTextStyle(textStyle);

    return textObject;
  }


  /**
   * @static parse the point
   *
   * @param  {string} pointJson The JSON for the point
   * @return {Point}            The created Point object
   */
  static parsePoint2D({ x, y }) {
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
