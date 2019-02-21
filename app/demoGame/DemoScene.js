import Scene from '../scene/Scene';
import Rectangle from '../graphics/geometry/Rectangle';
import Circle from '../graphics/geometry/Circle';

export default class DemoScene extends Scene {
  constructor() {
    super({
      debug: false,
    });
  }

  create() {
    this.rectangle = new Rectangle(20, 20, 150, 200);
    this.circle = new Circle(100, 100, 20);
  }

  update() {
    // this.rectangle.width += 1;
  }

  draw(context) {
    this.rectangle.draw(context);
    this.circle.draw(context);
  }
}
