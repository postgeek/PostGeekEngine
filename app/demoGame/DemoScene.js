import Scene from '../scene/Scene';
import Rectangle from '../graphics/geometry/Rectangle';
import Circle from '../graphics/geometry/Circle';

export default class DemoScene extends Scene {
  constructor(game) {
    super(game);
  }

  create() {
    this.rectangle = new Rectangle(this.Game.context, 20, 20, 150, 200);
    this.circle = new Circle(this.Game.context, 100, 100, 20);
  }

  update() {
    // this.rectangle.width += 1;
  }

  draw() {
    this.rectangle.draw();
    this.circle.draw();
  }
}
