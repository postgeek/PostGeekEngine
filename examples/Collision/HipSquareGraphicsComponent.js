import Component from 'core/Component';
import Vec2D from 'core/Vec2D';
import Rectangle from 'renderingEngine/geometry/Rectangle';

class HipSquareGraphicsComponent extends Component {
  constructor(containerObject) {
    super(containerObject);
    this.rectangle = new Rectangle(new Vec2D(120, 100), 100, 100);
  }

  receive(message) {
    const { x, y } = message;
    this.rectangle.point.x = x;
    this.rectangle.point.y = y;
  }

  draw(timeStep) {
    this.rectangle.draw(timeStep);
  }
} export default HipSquareGraphicsComponent;
