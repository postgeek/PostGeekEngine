import Scene from 'scene/Scene';
import Point from 'physics/Point';
import Rectangle from 'graphics/geometry/Rectangle';
import Transform from 'graphics/context/Transform';
import QuadraticCurve from 'graphics/geometry/QuadraticCurve';
import DefaultColours from 'graphics/colors/DefaultColours';
import Color from 'graphics/colors/Color';
import GeometryStyle from 'graphics/geometry/GeometryStyle';
import GraphicsJSONLoader from 'graphics/GraphicsJSONLoader';

export default class DemoScene extends Scene {
  create() {
    const circleJson = '{"point":{"x":100,"y":100},"radius":20,"geometryStyle":{"strokeStyle":{"hue":195,"saturation":53,"lightness":79,"alpha":1},"lineWidth":3}}';
    const rectJson = '{"point":{"x":0,"y":0},"width":20,"height":400,"geometryStyle":{"fillStyle":"indianred","strokeStyle":"indianred","lineWidth":1}}';
    const ellipseJson = '{"point":{"x":300,"y":300},"radiusX":50,"radiusY":75,"Rotation":0.7853981633974483,"geometryStyle":{"fillStyle":{"hue":302,"saturation":59,"lightness":65,"alpha":1},"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":10}}';
    const textJson = '{"point":{"x":200,"y":100},"text":"Hello World from JSON!","textStyle":{"fillStyle":"darkblue","strokeStyle":"lightblue","lineWidth":4,"font":"26px serif"}}';
    const bezierCurveJson = '{"startPoint":{"x":50,"y":200},"controlPoint1":{"x":800,"y":480},"controlPoint2":{"x":100,"y":150},"endPoint":{"x":340,"y":280},"geometryStyle":{"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":2}}';
    const quadraticCurveJson = '{"controlPoint":{"x":50,"y":200},"startPoint":{"x":800,"y":480},"endPoint":{"x":340,"y":280},"geometryStyle":{"strokeStyle":{"hue":0,"saturation":0,"lightness":100,"alpha":1},"lineWidth":2}}';

    const graphicsJSONLoader = new GraphicsJSONLoader(this.Game.context);
    this.testCircle = graphicsJSONLoader.CreateCircle(JSON.parse(circleJson));
    this.testRectangle = graphicsJSONLoader.CreateRectangle(JSON.parse(rectJson));
    this.testEllipse = graphicsJSONLoader.CreateEllipse(JSON.parse(ellipseJson));
    this.testText = graphicsJSONLoader.CreateText(JSON.parse(textJson));
    this.testBezierCurve = graphicsJSONLoader.CreateBezierCurve(JSON.parse(bezierCurveJson));
    this.testQuadraticCurve = graphicsJSONLoader.CreateQuadraticCurve(JSON.parse(quadraticCurveJson));

    this.Transform = new Transform(this.Game.context);

    this.circles = [];
    let circleStyle;
    for (let i = 0; i < DefaultColours.length - 1; i += 1) {
      const circle = new Rectangle(this.Game.context, new Point(i * 8, 0), 8, 400);
      circleStyle = new GeometryStyle({
        lineWidth: 1,
        fillStyle: DefaultColours[i].Name,
        strokeStyle: DefaultColours[i].Name,
      });
      circle.GeometryStyle = circleStyle;
      this.circles.push(circle);
    }
  }

  update() {
    // this.text.Text = `${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`;
    // console.log(`${this.Game.Keyboard.GetKeyCharacter()} ${this.Game.Keyboard.GetKeyCharacter().charCodeAt()}`);
    // this.rectangle.Width += 1;
  }

  draw() {
    this.testCircle.draw();
    this.testRectangle.draw();
    this.testText.draw();
    this.testEllipse.draw();
    this.testBezierCurve.draw();
    this.testQuadraticCurve.draw();
    // this.text.draw();
    // this.circle.draw();
    // for (let i = 0; i < this.circles.length - 1; i += 1) {
    //  this.circles[i].draw();
    // }
    // this.ParticleEmitter.draw();
  }
}
