import Scene from 'gameEngine/scene/Scene';
import Point from 'physicsEngine/Point';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Transform from 'renderingEngine/context/Transform';
import QuadraticCurve from 'renderingEngine/geometry/QuadraticCurve';
import DefaultColors from 'renderingEngine/colors/DefaultColors';
import Color from 'renderingEngine/colors/Color';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import GraphicsJSONLoader from 'renderingEngine/GraphicsJSONLoader';
import AssetCache from 'core/managers/AssetCache';
import { AssetType } from 'core/managers/Asset';

export default class ShapeDemoScene extends Scene {
  create() {
    const circleJson = '{"point":{"x":100,"y":100},"radius":20,"geometryStyle":{"strokeStyle":{"hue":195,"saturation":53,"lightness":79,"alpha":1},"lineWidth":3}}';
    const rectJson = '{"point":{"x":0,"y":0},"width":3,"height":400,"geometryStyle":{"fillStyle":{"name":"indianred"},"strokeStyle":{"name":"indianred"},"lineWidth":1}}';
    const ellipseJson = '{"point":{"x":300,"y":300},"radiusX":50,"radiusY":75,"rotation":0.7853981633974483,"geometryStyle":{"fillStyle":{"hue":302,"saturation":59,"lightness":65,"alpha":1},"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":10}}';
    const textJson = '{"point":{"x":200,"y":100},"text":"Hello World from JSON!","textStyle":{"fillStyle":{"name":"darkblue"},"strokeStyle":{"name":"lightblue"},"lineWidth":4,"font":"26px serif"}}';
    const bezierCurveJson = '{"startPoint":{"x":50,"y":200},"firstControlPoint":{"x":800,"y":480},"secondControlPoint":{"x":100,"y":150},"endPoint":{"x":340,"y":280},"geometryStyle":{"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":2}}';
    const quadraticCurveJson = '{"controlPoint":{"x":50,"y":200},"startPoint":{"x":800,"y":480},"endPoint":{"x":340,"y":280},"geometryStyle":{"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":2}}';

    this.testCircle = GraphicsJSONLoader.createCircle(JSON.parse(circleJson));
    this.testRectangle = GraphicsJSONLoader.createRectangle(JSON.parse(rectJson));
    this.testEllipse = GraphicsJSONLoader.createEllipse(JSON.parse(ellipseJson));
    this.testText = GraphicsJSONLoader.createText(JSON.parse(textJson));
    this.testBezierCurve = GraphicsJSONLoader.createBezierCurve(JSON.parse(bezierCurveJson));
    this.testQuadraticCurve = GraphicsJSONLoader.createQuadraticCurve(JSON.parse(quadraticCurveJson));

    /*
    this.circles = [];
    let circleStyle;
    for (let i = 0; i < DefaultColors.length - 1; i += 1) {
      const circle = new Rectangle(new Point(i * 8, 0), 8, 400);
      circleStyle = new GeometryStyle({
        lineWidth: 1,
        fillStyle: DefaultColors[i].Name,
        strokeStyle: DefaultColors[i].Name,
      });
      circle.GeometryStyle = circleStyle;
      this.circles.push(circle);
    } */
  }

  update() {

  }

  draw() {
    this.testRectangle.draw();
    this.testText.draw();
    this.testEllipse.draw();
    this.testBezierCurve.draw();
    this.testQuadraticCurve.draw();
  }
}
