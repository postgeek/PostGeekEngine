import Line from './geometry/Line';
import Circle from './geometry/Circle';
import Rectangle from './geometry/Rectangle';
import Ellipse from './geometry/Ellipse';
import BezierCurve from './geometry/BezierCurve';
import QuadraticCurve from './geometry/QuadraticCurve';
import GeometryStyle from './geometry/GeometryStyle';

import TextGraphic from './text/TextGraphic';
import TextStyle from './text/TextStyle';

import Color from './colors/Color';
import HSLAColor from './colors/HSLAColor';
import HSLColor from './colors/HSLColor';
import RGBAColor from './colors/RGBAColor';
import RGBColor from './colors/RGBColor';

import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';
import Vec2D from '../core/Vec2D';

/**
 * The graphic objects JSON loader
 */
export default class GraphicsJSONLoader {
  /**
   * @static Creates a line with the supplied properties
   *
   * @param  {string} config The JSON configuration for the line
   * @return {Line}        The newly created line
   */
  static createLine({ startPoint, endPoint, geometryStyle }) {
    if (startPoint === undefined || endPoint === undefined) {
      throw new InvalidArguementError();
    }
    const parsedStartPoint = GraphicsJSONLoader.parseVec2D(startPoint);
    const parsedEndPoint = GraphicsJSONLoader.parseVec2D(endPoint);
    const line = new Line(parsedStartPoint, parsedEndPoint);
    if (geometryStyle !== undefined) {
      line.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return line;
  }

  /**
   * @static Creates a circle with the supplied properties
   *
   * @param  {string} config The JSON configuration for the circle
   * @return {Circle}        The newly created circle
   */
  static createCircle({ radius, point, geometryStyle }) {
    if (radius === undefined || point === undefined) {
      throw new InvalidArguementError();
    }
    const parsedPoint = GraphicsJSONLoader.parseVec2D(point);
    const circle = new Circle(parsedPoint, radius);
    if (geometryStyle !== undefined) {
      circle.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return circle;
  }

  /**
   * @static Creates a bezier curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {BezierCurve}    The newly created bezier curve
   */
  static createBezierCurve({ startPoint, firstControlPoint, secondControlPoint, endPoint, geometryStyle }) {
    if (startPoint === undefined || firstControlPoint === undefined || secondControlPoint === undefined || endPoint === undefined) {
      throw new InvalidArguementError();
    }
    const parsedStartPoint = GraphicsJSONLoader.parseVec2D(startPoint);
    const parsedFirstControlPoint = GraphicsJSONLoader.parseVec2D(firstControlPoint);
    const parsedSecondControlPoint = GraphicsJSONLoader.parseVec2D(secondControlPoint);
    const parsedEndPoint = GraphicsJSONLoader.parseVec2D(endPoint);

    const bezierCurve = new BezierCurve(parsedStartPoint, parsedFirstControlPoint, parsedSecondControlPoint, parsedEndPoint);

    if (geometryStyle !== undefined) {
      bezierCurve.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return bezierCurve;
  }

  /**
   * @static Creates a quadratic curve with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the bezier curve
   * @return {QuadraticCurve} The newly created quadratic curve
   */
  static createQuadraticCurve({ startPoint, controlPoint, endPoint, geometryStyle }) {
    if (startPoint === undefined || controlPoint === undefined || endPoint === undefined) {
      throw new InvalidArguementError();
    }
    const parsedStartPoint = GraphicsJSONLoader.parseVec2D(startPoint);
    const parsedControlPoint = GraphicsJSONLoader.parseVec2D(controlPoint);
    const parsedEndPoint = GraphicsJSONLoader.parseVec2D(endPoint);

    const quadraticCurve = new QuadraticCurve(parsedStartPoint, parsedControlPoint, parsedEndPoint);

    if (geometryStyle !== undefined) {
      quadraticCurve.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return quadraticCurve;
  }

  /**
   * @static Creates a new ellipse with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the ellipse
   * @return {Ellipse}        The newly created ellipse
   */
  static createEllipse({ point, radiusX, radiusY, rotation, geometryStyle }) {
    if (point === undefined || radiusX === undefined || radiusY === undefined || rotation === undefined) {
      throw new InvalidArguementError();
    }
    const newPoint = GraphicsJSONLoader.parseVec2D(point);
    const ellipse = new Ellipse(newPoint, radiusX, radiusY, rotation);

    if (geometryStyle !== undefined) {
      ellipse.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return ellipse;
  }

  /**
   * @static Creates a new rectangle with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the rectangle
   * @return {Rectangle}      The newly created rectangle
   */
  static createRectangle({ point, height, width, geometryStyle }) {
    if (point === undefined || height === undefined || width === undefined) {
      throw new InvalidArguementError();
    }
    const parsedPoint = GraphicsJSONLoader.parseVec2D(point);

    const rectangle = new Rectangle(parsedPoint, width, height);

    if (geometryStyle !== undefined) {
      rectangle.geometryStyle = GraphicsJSONLoader.parseGeometryStyle(geometryStyle);
    }

    return rectangle;
  }

  /**
   * @static Creates a new text with the supplied properties
   *
   * @param  {string} config  The JSON configuration for the text
   * @return {Text}           The newly created text
   */
  static createText({ point, text, textStyle }) {
    if (point === undefined || text === undefined) {
      throw new InvalidArguementError();
    }
    const parsedPoint = GraphicsJSONLoader.parseVec2D(point);

    const textObject = new TextGraphic(parsedPoint, text);

    if (textStyle !== undefined) {
      textObject.textStyle = GraphicsJSONLoader.parseTextStyle(textStyle);
    }

    return textObject;
  }

  /**
   * @static parse the point
   *
   * @param  {string} pointJson The JSON for the point
   * @return {Vec2D}            The created Point object
   */
  static parseVec2D({ x, y }) {
    if (x === undefined || y === undefined) {
      throw new InvalidArguementError();
    }
    return new Vec2D(x, y);
  }

  /**
   * @static parse the text styling
   *
   * @param  {string} textStyle The JSON for the text styling
   * @return {TextStyle}        The created TextStyle object
   */
  static parseTextStyle(textStyle) {
    const parsedTextStyle = GraphicsJSONLoader.parseStyle(textStyle);
    return new TextStyle(parsedTextStyle);
  }

  /**
   * @static parse the geometry styling
   *
   * @param  {string} geometryStyle   The JSON for the geometry styling
   * @return {GeometryStyle}          The created GeometryStyle object
   */
  static parseGeometryStyle(geometryStyle) {
    const parsedGeometryStyle = GraphicsJSONLoader.parseStyle(geometryStyle);
    return new GeometryStyle(parsedGeometryStyle);
  }

  static parseStyle(style) {
    if (style === undefined) {
      throw new InvalidArguementError();
    }
    const parsedStyle = style;
    const { strokeStyle, fillStyle } = parsedStyle;

    if (strokeStyle !== undefined) {
      parsedStyle.strokeStyle = GraphicsJSONLoader.parseColor(strokeStyle);
    }
    if (fillStyle !== undefined) {
      parsedStyle.fillStyle = GraphicsJSONLoader.parseColor(fillStyle);
    }
    return parsedStyle;
  }

  /**
   * @static parse the color
   *
   * @param  {string} colorStyle   The JSON for the color styling
   * @return {GeometryStyle}       The created Color object
   */
  static parseColor({ name, hue, lightness, saturation, red, blue, green, alpha }) {
    if (hue !== undefined && lightness !== undefined && saturation !== undefined) {
      if (alpha !== undefined) {
        return new HSLAColor(hue, saturation, lightness, alpha);
      }
      return new HSLColor(hue, saturation, lightness);
    }
    if (red !== undefined && blue !== undefined && green !== undefined) {
      if (alpha !== undefined) {
        return new RGBAColor(red, green, blue, alpha);
      }
      return new RGBColor(red, green, blue);
    }
    if (name !== undefined) {
      return new Color({ name }); // TODO: Log a bug and fix this by adding an HTMLColor class
    }
    throw new InvalidArguementError();
  }
}
