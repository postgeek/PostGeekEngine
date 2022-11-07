import Scene from '../../src/gameEngine/scene/Scene';
import Vec2D from '../../src/core/Vec2D';
import ServiceLocator from '../../src/core/ServiceLocator';
import PathBuilder from '../../src/renderingEngine/geometry/Path/PathBuilder';
import Transform from '../../src/renderingEngine/context/Transform';
import Circle from '../../src/renderingEngine/geometry/Circle';
import Color from '../../src/renderingEngine/colors/Color';
import GeometryStyle from '../../src/renderingEngine/geometry/GeometryStyle';
import KeyboardKey from '../../src/inputEngine/KeyboardKey';

export default class PathBuilderDemoScene extends Scene {
  preload() {
    //this.loadImage('george', './assets/george.png');
  }

  create() {
    this.transform = new Transform();

    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.D);

    const pathBuilder = new PathBuilder();
    pathBuilder.moveTo(new Vec2D(200, 200));

    pathBuilder.lineTo(new Vec2D(200, 250));
    pathBuilder.quadraticCurveTo(new Vec2D(200, 100), new Vec2D(240, 250));
    pathBuilder.quadraticCurveTo(new Vec2D(200, 150), new Vec2D(200, 300));
    pathBuilder.lineTo(new Vec2D(300, 400));

    this.path = pathBuilder.build();
    this.rotatingCircle = new Circle(new Vec2D(250, 250), 30);
    this.rotatingCircle.geometryStyle = new GeometryStyle({
      fillStyle: Color.PURPLE,
      strokeStyle: Color.VIOLET,
      lineWidth: 4,
    });
    this.circle = new Circle(new Vec2D(200, 200), 5);
    this.rotationAngle = 0;
  }

  update() {
    this.rotationAngle += 1;
    if (this.rotationAngle >= 360) {
      this.rotationAngle = 0;
    }
    if (this.keyboard.keyDownOnce(KeyboardKey.D)) {
      console.log('KEYBOARD DOWN');
      this.deleteImage('george');
    }
  }

  draw() {
    this.transform.begin();
    this.transform.translate(200, 200);
    this.transform.rotate(this.rotationAngle);
    this.transform.translate(-200, -200);
    this.path.draw();
    this.rotatingCircle.draw();
    this.transform.end();
    this.circle.draw();
  }
}
