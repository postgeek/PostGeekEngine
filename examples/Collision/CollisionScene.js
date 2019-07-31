import Scene from 'gameEngine/scene/Scene';
import Point from '../../src/core/Point';
import Text from '../../src/renderingEngine/text/Text';
import GameObject from '../../src/gameEngine/gameObjects/GameObject';
import RectangleHitBox from '../../src/physicsEngine/hitBoxes/RectangleHitBox';
import PhysicsObject from '../../src/physicsEngine/PhysicsObject';
import Rectangle from '../../src/renderingEngine/geometry/Rectangle';

class RectangleGameObject extends GameObject {
  constructor(scene) {
    super(scene);

    this.graphics = new RectangleGraphicsObject();
    this.physics = new RectanglePhysicsObject(this);
  }
}

class RectangleGraphicsObject extends Rectangle {
  constructor() {
    super(new Point(100, 100), 100, 100);
  }

  update() {
     // Graphics object should be updated here based on an event from the physics object.
  }
}

class RectanglePhysicsObject extends PhysicsObject {
  constructor(gameObject) {
    super(gameObject, new RectangleHitBox(new Point(100, 100), 100, 100));
    this.isEnabled = true;

    this._velocity = 10;
  }

  internalUpdate() {
    if (this.isCollidingWithWorldBounds) {
      this._velocity = -this._velocity;
    }

    // Should be throwing an event here.
    this.gameObject.graphics.X += this._velocity;
    this.hitBox.x += this._velocity;
  }
}

export default class CollisionScene extends Scene {
  create() {
    this.rectangle = new RectangleGameObject(this);
    this.rectangleText = new Text(new Point(3, 12), "");
  }

  update() {
    this.rectangle.update();
    this.rectangleText.Text = `Rectangle is at x: '${this.rectangle.graphics.X}' y: '${this.rectangle.graphics.Y}'`;
  }

  draw() {
    this.rectangle.draw();
    this.rectangleText.draw();
  }
}
