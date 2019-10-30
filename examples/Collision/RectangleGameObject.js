import Vec2D from 'core/Vec2D';
import GameObject from 'gameEngine/gameObjects/GameObject';
import RectangleGraphicsComponent from './RectangleGraphicsComponent';
import RectanglePhysicsComponent from './RectanglePhysicsComponent';


class RectangleGameObject extends GameObject {
  constructor(scene) {
    super(scene);
    this.point = new Vec2D(100, 100);

    this.graphics = new RectangleGraphicsComponent(this);
    this.physics = new RectanglePhysicsComponent(this, scene.world);
  }
} export default RectangleGameObject;
