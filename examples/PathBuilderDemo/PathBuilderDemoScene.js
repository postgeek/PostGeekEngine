import Scene from 'gameEngine/scene/Scene';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Point from 'core/Point';
import ServiceLocator from 'core/ServiceLocator';
import PathBuilder from 'renderingEngine/geometry/Path/PathBuilder'
import Transform from 'renderingEngine/context/Transform'
import Circle from 'renderingEngine/geometry/Circle';
import Color from 'renderingEngine/colors/Color';
import GeometryStyle from '../../src/renderingEngine/geometry/GeometryStyle';

export default class PathBuilderDemoScene extends Scene {  
  create() {
    this.transform = new Transform();

    this.keyboard = ServiceLocator.instance.locate('keyboard');
    
    const pathBuilder = new PathBuilder();
    pathBuilder.moveTo(new Point(200,200));

    pathBuilder.lineTo(new Point(200,250));
    pathBuilder.quadraticCurveTo(new Point(200,100), new Point(240,250));
    pathBuilder.quadraticCurveTo(new Point(200,150), new Point(200,300));
    pathBuilder.lineTo(new Point(300,400));

    this.path = pathBuilder.build();
    this.rotatingCircle = new Circle(new Point(250,250),30);
    this.rotatingCircle.geometryStyle = new GeometryStyle({
      fillStyle: Color.PURPLE,
      strokeStyle: Color.VIOLET,
      lineWidth: 4,
    });
    this.circle = new Circle(new Point(200,200), 5);
    this.rotationAngle = 0;
  }

  update() {
    this.rotationAngle += 1;
    if(this.rotationAngle >= 360) {
      this.rotationAngle = 0
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
