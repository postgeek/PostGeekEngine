import Vec2D from 'core/Vec2D';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import GraphicsComponent from 'renderingEngine/GraphicsComponent';

class RectangleGraphicsComponent extends GraphicsComponent {
  constructor(gameObject) {
    super();

    this._rectangle = new Rectangle(gameObject.point, 100, 100);

    this.graphicObjects = [
      this._rectangle,
    ];
  }

  get rectangle() {
    return this._rectangle;
  }

  update(gameObject) {
    this.rectangle.point = gameObject.point.clone();
  }
} export default RectangleGraphicsComponent;
