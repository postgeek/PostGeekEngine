import Vec2D from 'core/Vec2D';
import KeyboardKey from 'inputEngine/KeyboardKey';
import ServiceLocator from 'core/ServiceLocator';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import PhysicsEngine from 'physicsEngine/PhysicsEngine';
import PhysicsComponent  from 'physicsEngine/PhysicsComponent';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Circle from 'renderingEngine/geometry/Circle';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color';
import PathBuilder from 'renderingEngine/geometry/PathBuilder';

class BoxStack {
  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerArrowKeys();
    this.keyboard.registerKey(KeyboardKey.A);

    this.MAX_HEIGHT = 550;

    this.rectangles = [];
    this.rectangles.push(this.createRectangle(200, 200, 20, 20));
    this.rectangles.push(this.createRectangle(200, 100, 2, 2));

    this.pathBuilder = new PathBuilder();
    this.pathBuilder.moveTo(new Vec2D(200,100));
    this.pathBuilder.lineTo(new Vec2D(200,200));
    this.pathBuilder.closePath();
  }

  update(timeStep) {
    for(let i = 0; i < this.rectangles.length; i++) {
      let rectangle = this.rectangles[i];
      //rectangle.y += 10;
      this.checkBottomCollision(rectangle);
    }
  }

  draw(timeStep) {
    for(let i = 0; i < this.rectangles.length; i++) {
      this.rectangles[i].draw();
    }
    this.pathBuilder.draw();
  }

  checkBottomCollision(rectangle) {
    let rectangleHeight = rectangle.y + rectangle.height;
    if(rectangleHeight > this.MAX_HEIGHT) {
      rectangle.y = 100;
    }
  }

  createRectangle(x, y, width, height) {
    return new Rectangle(new Vec2D(x, y), width, height);
  }
} export default BoxStack;
