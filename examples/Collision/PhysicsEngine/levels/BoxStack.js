import Vec2D from '../../../../src/core/Vec2D';
import KeyboardKey from '../../../../src/inputEngine/KeyboardKey';
import ServiceLocator from '../../../../src/core/ServiceLocator';
import Rectangle from '../../../../src/renderingEngine/geometry/Rectangle';
import PathBuilder from '../../../../src/renderingEngine/geometry/Path/PathBuilder';
import GeometryStyle from '../../../../src/renderingEngine/geometry/GeometryStyle';
import Color from '../../../../src/renderingEngine/colors/Color';

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
    this.pathBuilder.moveTo(new Vec2D(200, 100));
    this.pathBuilder.lineTo(new Vec2D(200, 200));
    this.path = this.pathBuilder.build();
    this.path.geometryStyle = new GeometryStyle({
      strokeStyle: Color.RED,
    });
  }

  update(timeStep) {
    for (let i = 0; i < this.rectangles.length; i++) {
      let rectangle = this.rectangles[i];
      this.checkBottomCollision(rectangle);
    }
  }

  draw(timeStep) {
    for (let i = 0; i < this.rectangles.length; i++) {
      this.rectangles[i].draw();
    }
    this.path.draw();
  }

  checkBottomCollision(rectangle) {
    let rectangleHeight = rectangle.y + rectangle.height;
    if (rectangleHeight > this.MAX_HEIGHT) {
      rectangle.y = 100;
    }
  }

  createRectangle(x, y, width, height) {
    return new Rectangle(new Vec2D(x, y), width, height);
  }
}
export default BoxStack;
