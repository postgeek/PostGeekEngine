/* eslint max-classes-per-file: 0 */
import ContainerObject from 'core/ContainerObject';
import Component from 'core/Component';
import RectangleHitBox from 'physicsEngine/hitBoxes/RectangleHitBox';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Point from 'core/Point';
import ServiceLocator from 'core/ServiceLocator';

class PongPaddlePhysicsComponent extends Component {
  constructor(containerObject, player) {
    super(containerObject);
    if (player === 1) {
      this.hitBox = new RectangleHitBox(new Point(10, 30), 20, 100);
    } else if (player === 2) {
      this.hitBox = new RectangleHitBox(new Point(970, 30), 20, 100);
    }
    this.world = new RectangleHitBox(new Point(0, 0), 1000, 550);
    this.velocityX = 5;
  }

  receive(message) {
    const { x, y } = message;
    if (x || y) {
      this.hitBox.point.x += x;
      this.hitBox.point.y += y;
    }
  }

  update() {
    if (this.isCollidingWithTopBound()) {
      this.containerObject.send({ collision: 'top' });
    } else if (this.isCollidingWithBottomBound()) {
      this.containerObject.send({ collision: 'bottom' });
    } else {
      this.containerObject.send({ collision: 'none' });
    }
  }

  isCollidingWithWorldBounds() {
    return this.isCollidingWithLeftBound(this.world)
    || this.isCollidingWithRightBound(this.world)
    || this.isCollidingWithTopBound(this.world)
    || this.isCollidingWithBottomBound(this.world);
  }

  isCollidingWithLeftBound() {
    return this.hitBox.x <= this.world.x;
  }

  isCollidingWithRightBound() {
    return this.hitBox.x + this.hitBox.width >= this.world.x + this.world.width;
  }

  isCollidingWithTopBound() {
    return this.hitBox.y <= this.world.y;
  }

  isCollidingWithBottomBound() {
    return this.hitBox.y + this.hitBox.height >= this.world.y + this.world.height;
  }
}

class PongPaddleGraphicsComponent extends Component {
  constructor(containerObject, player) {
    super(containerObject);
    if (player === 1) {
      this.pongPaddleGraphic = new Rectangle(new Point(10, 30), 20, 100);
    } else if (player === 2) {
      this.pongPaddleGraphic = new Rectangle(new Point(970, 30), 20, 100);
    }
  }

  receive(message) {
    const { x, y } = message;
    if (x || y) {
      this.pongPaddleGraphic.point.x += x;
      this.pongPaddleGraphic.point.y += y;
    }
  }

  draw(timeStep) {
    this.pongPaddleGraphic.draw(timeStep);
  }
}

class PongPaddleInputComponent extends Component {
  constructor(containerObject, config) {
    super(containerObject);
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    const { keyUp, keyDown } = config;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
    this.keyboard.registerKey(keyUp);
    this.keyboard.registerKey(keyDown);
  }

  receive(message) {
    if (message.collision) {
      this.collision = message.collision;
    }
  }

  update() {
    if (this.keyboard.keyDownHeld(this.keyUp) && this.collision !== 'top') {
      this.containerObject.send({ x: 0, y: -4 });
    }
    if (this.keyboard.keyDownHeld(this.keyDown) && this.collision !== 'bottom') {
      this.containerObject.send({ x: 0, y: 4 });
    }
  }
}

class PongPaddle extends ContainerObject {
  constructor(player) {
    super();
    this.pongPhysicsComponent = new PongPaddlePhysicsComponent(this, player);
    this.pongGraphicsComponent = new PongPaddleGraphicsComponent(this, player);
    if (player === 1) {
      this.PongPaddleInputComponent = new PongPaddleInputComponent(this, {
        keyUp: KeyboardKey.W,
        keyDown: KeyboardKey.S,
      });
    } else if (player === 2) {
      this.PongPaddleInputComponent = new PongPaddleInputComponent(this, {
        keyUp: KeyboardKey.UP,
        keyDown: KeyboardKey.DOWN,
      });
    }
  }
} export default PongPaddle;
