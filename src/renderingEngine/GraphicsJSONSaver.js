import InvalidArguementError from '../core/errorHandling/errors/InvalidArguementError';

export default class GraphicsJSONSaver {
  static stringifyLine(line) {
    if (line === undefined) {
      throw new InvalidArguementError();
    }
    const startPoint = GraphicsJSONSaver.stringifyPoint2D(line.startPoint);
    const endPoint = GraphicsJSONSaver.stringifyPoint2D(line.endPoint);
    return `{"startPoint":${startPoint},"endPoint":${endPoint}}`;
  }

  static stringifyCircle(circle) {
    if (circle === undefined) {
      throw new InvalidArguementError();
    }
    const point = GraphicsJSONSaver.stringifyPoint2D(circle.point);
    return `{"point":${point},"radius":${circle.radius}}`;
  }

  static stringifyBezierCurve(bezierCurve) {
    if (bezierCurve === undefined) {
      throw new InvalidArguementError();
    }
    const startPoint = GraphicsJSONSaver.stringifyPoint2D(bezierCurve.startPoint);
    const firstControlPoint = GraphicsJSONSaver.stringifyPoint2D(bezierCurve.firstControlPoint);
    const secondControlPoint = GraphicsJSONSaver.stringifyPoint2D(bezierCurve.secondControlPoint);
    const endPoint = GraphicsJSONSaver.stringifyPoint2D(bezierCurve.endPoint);
    return `{"startPoint":${startPoint},"firstControlPoint":${firstControlPoint},"secondControlPoint":${secondControlPoint},"endPoint":${endPoint}}`;
  }

  static stringifyQuadraticCurve(quadraticCurve) {
    if (quadraticCurve === undefined) {
      throw new InvalidArguementError();
    }
    const startPoint = GraphicsJSONSaver.stringifyPoint2D(quadraticCurve.startPoint);
    const controlPoint = GraphicsJSONSaver.stringifyPoint2D(quadraticCurve.controlPoint);
    const endPoint = GraphicsJSONSaver.stringifyPoint2D(quadraticCurve.endPoint);
    return `{"startPoint":${startPoint},"controlPoint":${controlPoint},"endPoint":${endPoint}}`;
  }

  static stringifyEllipse(ellipse) {
    if (ellipse === undefined) {
      throw new InvalidArguementError();
    }
    const point = GraphicsJSONSaver.stringifyPoint2D(ellipse.point);
    return `{"point":${point},"radiusX":${ellipse.radiusX},"radiusY":${ellipse.radiusY},"rotation":${ellipse.rotation}}`;
  }

  static stringifyRectangle(rectangle) {
    if (rectangle === undefined) {
      throw new InvalidArguementError();
    }
    const point = GraphicsJSONSaver.stringifyPoint2D(rectangle.point);
    const geometryStyle = GraphicsJSONSaver.stringifyGeometryStyle(rectangle.geometryStyle);
    return `{"point":${point},"width":${rectangle.width},"height":${rectangle.height}, "geometryStyle": {${geometryStyle}}}`;
  }

  static stringifyTextGraphic(textGraphic) {
    if (textGraphic === undefined) {
      throw new InvalidArguementError();
    }
    const point = GraphicsJSONSaver.stringifyPoint2D(textGraphic.point);
    const textStyle = GraphicsJSONSaver.stringifyTextStyle(textGraphic.textStyle);
    if (textStyle !== undefined) {
      return `{"point":${point},"text":"${textGraphic.text}", "textStyle": {${textStyle}}}`;
    }
    return `{"point":${point},"text":"${textGraphic.text}"}`;
  }

  static stringifyPoint2D(point) {
    if (point === undefined) {
      throw new InvalidArguementError();
    }
    return `{"x":${point.x},"y":${point.y}}`;
  }

  static stringifyDrawingStyle(drawingStyle) {
    if (drawingStyle === undefined) {
      throw new InvalidArguementError();
    }
    let jsonString = '';
    if (drawingStyle.fillStyle !== undefined) {
      jsonString += `"fillStyle": ${GraphicsJSONSaver.stringifyColor(drawingStyle.fillStyle)},`;
    }
    if (drawingStyle.strokeStyle !== undefined) {
      jsonString += `"strokeStyle": ${GraphicsJSONSaver.stringifyColor(drawingStyle.strokeStyle)},`;
    }
    if (drawingStyle.lineWidth !== undefined) {
      jsonString += `"lineWidth": ${drawingStyle.lineWidth},`;
    }
    if (drawingStyle.shadowBlur !== undefined) {
      jsonString += `"shadowBlur": ${drawingStyle.shadowBlur},`;
    }
    if (drawingStyle.shadowColor !== undefined) {
      jsonString += `"shadowColor": ${drawingStyle.shadowColor},`;
    }
    if (drawingStyle.shadowOffsetX !== undefined) {
      jsonString += `"shadowOffsetX": ${drawingStyle.shadowOffsetX},`;
    }
    if (drawingStyle.shadowOffsetY !== undefined) {
      jsonString += `"shadowOffsetY": ${drawingStyle.shadowOffsetY},`;
    }
    return jsonString;
  }

  static stringifyGeometryStyle(geometryStyle) {
    if (geometryStyle === undefined) {
      throw new InvalidArguementError();
    }
    let jsonString = GraphicsJSONSaver.stringifyDrawingStyle(geometryStyle);
    if (geometryStyle.lineCap !== undefined) {
      jsonString += `"lineCap": "${geometryStyle.lineCap}",`;
    }
    if (geometryStyle.lineJoin !== undefined) {
      jsonString += `"lineJoin": "${geometryStyle.lineJoin}",`;
    }
    if (geometryStyle.miterLimit !== undefined) {
      jsonString += `"miterLimit": ${geometryStyle.miterLimit},`;
    }
    if (geometryStyle.lineDash !== undefined) {
      jsonString += `"lineDash": [${geometryStyle.lineDash}],`;
    }
    if (geometryStyle.lineDashOffset !== undefined) {
      jsonString += `"lineDashOffset": ${geometryStyle.lineDashOffset},`;
    }
    if (jsonString.length > 0) {
      jsonString = jsonString.slice(0, -1);
    }
    return jsonString;
  }

  static stringifyTextStyle(textStyle) {
    if (textStyle === undefined) {
      throw new InvalidArguementError();
    }
    let jsonString = GraphicsJSONSaver.stringifyDrawingStyle(textStyle);
    if (textStyle.font) {
      jsonString += `"font": "${textStyle.font}",`;
    }
    if (textStyle.textAlign) {
      jsonString += `"textAlign": ${textStyle.textAlign},`;
    }
    if (textStyle.textBaseline) {
      jsonString += `"textBaseline": ${textStyle.textBaseline},`;
    }
    if (textStyle.direction) {
      jsonString += `"direction": ${textStyle.direction},`;
    }
    if (jsonString.length > 0) {
      jsonString = jsonString.slice(0, -1);
    }
    return jsonString;
  }

  static stringifyColor(color) {
    if (color.hue !== undefined && color.lightness !== undefined && color.saturation !== undefined) {
      if (color.alpha !== undefined) {
        return `{"hue":${color.hue}, "saturation":${color.saturation}, "lightness":${color.lightness}, "alpha":${color.alpha}}`;
      }
      return `{"hue":${color.hue}, "saturation":${color.saturation}, "lightness":${color.lightness}}`;
    }
    if (color.red !== undefined && color.green !== undefined && color.blue !== undefined) {
      if (color.alpha !== undefined) {
        return `{"red":${color.red}, "green":${color.green}, "blue":${color.blue}, "alpha":${color.alpha}}`;
      }
      return `{"red":${color.red}, "green":${color.green}, "blue":${color.blue}}`;
    }
    if (color.name !== undefined) {
      return `{"name": "${color.name}"}`;
    }
    if (color.hex !== undefined) {
      return `{"hex": "#${color.hex}"}`;
    }
    return undefined;
  }
}
