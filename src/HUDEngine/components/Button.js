import GraphicComponent from '../GraphicComponent';

class Button extends GraphicComponent {
  constructor(point) {
    super(point);
    this.graphicObjects = [];
  }

  // TODO: Different button states
  // TODO: Add the button events (click)

  set Container(value) {
    this.container = value;
  }

  get Container() {
    return this.container;
  }

  addGraphicsObject(graphicObject) {
    this.graphicObjects.push(graphicObject);
  }

  draw() {
    for (let i = 0; i < this.graphicObjects.length - 1; i += 1) {
      this.graphicObjects[i].draw();
    }
  }
} export default Button;
