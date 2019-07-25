import Scene from 'gameEngine/scene/Scene';
import Point from '../../src/physicsEngine/Point';
import Text from '../../src/renderingEngine/text/Text';
import GameObject from '../../src/gameEngine/gameObjects/GameObject';
import PhysicsObject from '../../src/physicsEngine/PhysicsObject';
import Rectangle from '../../src/renderingEngine/geometry/Rectangle';

class RectangleGameObject extends GameObject {
  constructor(scene) {
    super(scene, new Point(100, 100), 100, 100);

    this.graphics = new RectangleGraphicsObject(this);
    this.physics = new RectanglePhysicsObject(this);
  }
}

class RectangleGraphicsObject extends Rectangle {
  constructor(gameObject) {
    super(gameObject.point, gameObject.width, gameObject.height);
    this._gameObject = gameObject;
  }

  // Notes:
  // The width and height of the graphics object using
  // settings from the GameObject works for a rectangle
  // but not a circle for example.

  update() {
    // TODO: Have the game engine do this calculation in 
    // relation to the location of the object in the world
    this.point = this._gameObject.point;
  }
}

class RectanglePhysicsObject extends PhysicsObject {
  constructor(gameObject) {
    super(gameObject);
    this.isEnabled = true;

    this._velocity = 10;
  }

  // Notes:
  // We are updating the hitbox by reference using the point
  // object found in the game object and the size of the box
  // is never changed. By default it should update based on the
  // Game object size and location
  //
  // Also should allow for custom sized hit boxes...

  internalUpdate() {
    if (this.isCollidingWithWorldBounds) {
      this._velocity = -this._velocity;
    }

    this.gameObject.x += this._velocity;
  }
}

export default class CollisionScene extends Scene {
  create() {
    this.rectangle = new RectangleGameObject(this);
    this.rectangleText = new Text(new Point(3, 12), "");
  }

  update() {
    this.rectangle.update();
    this.rectangleText.Text = `Rectangle is at x: '${this.rectangle.x}' y: '${this.rectangle.y}'`;
  }

  draw() {
    this.rectangle.draw();
    this.rectangleText.draw();
  }
}
