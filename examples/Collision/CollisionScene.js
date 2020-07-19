import Scene from 'gameEngine/scene/Scene';
import Point from '../../src/core/Point';
import TextGraphic from '../../src/renderingEngine/text/TextGraphic';
import GameObject from '../../src/gameEngine/gameObjects/GameObject';
import RectangleHitBox from '../../src/physicsEngine/hitBoxes/RectangleHitBox';
import PhysicsComponent from '../../src/physicsEngine/PhysicsComponent';
import GraphicsComponent from '../../src/renderingEngine/GraphicsComponent';
import Rectangle from '../../src/renderingEngine/geometry/Rectangle';

class RectangleGraphicsComponent extends GraphicsComponent {
  constructor() {
    super();

    this._rectangle = new Rectangle(new Point(100, 100), 100, 100);

    this.graphicObjects = [
      this._rectangle,
    ];
  }

  get rectangle() {
    return this._rectangle;
  }
}

class RectanglePhysicsComponent extends PhysicsComponent {
  constructor(gameObject) {
    super(gameObject, new RectangleHitBox(new Point(100, 100), 100, 100));
    this.isEnabled = true;

    this._velocity = 10;
  }

  internalUpdate() {
    if (this.isCollidingWithWorldBounds) {
      this._velocity = -this._velocity;
    }

    // Should be throwing an event here to update the rectangle.
    this.gameObject.graphics.rectangle.x += this._velocity;
    this.hitBox.x += this._velocity;
  }
}

class RectangleGameObject extends GameObject {
  constructor(scene) {
    super(scene);

    this.graphics = new RectangleGraphicsComponent();
    this.physics = new RectanglePhysicsComponent(this);
  }
}

export default class CollisionScene extends Scene {
  create() {
    this.rectangle = new RectangleGameObject(this);
    this.rectangleText = new TextGraphic(new Point(3, 12), '');
  }

  update() {
    this.rectangle.update();
    this.rectangleText.text = `Rectangle is at x: '${this.rectangle.graphics.rectangle.x}' y: '${this.rectangle.graphics.rectangle.y}'`;
  }

  draw() {
    this.rectangle.draw();
    this.rectangleText.draw();
  }
}
