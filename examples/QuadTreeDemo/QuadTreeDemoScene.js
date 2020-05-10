import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import ServiceLocator from 'core/ServiceLocator';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color'

export default class QuadTreeDemoScene extends Scene {  
  create() {
    this.registerKeys();

    this.isPaused = true;
    this.useAcceleration = true;

    this.collisionMovingBoxStyle = new GeometryStyle({
      fillStyle: Color.GREEN,
    });
    this.movingBoxStyle = new GeometryStyle({
      fillStyle: Color.RED,
    });

    this.movingBoxAcceleration = new Point(0,0);

    this.collisionBox = new Rectangle(new Point(20, 100), 1160, 470);
    this.movingBox = new Rectangle(new Point(300, 220), 10, 10);
    this.movingBox.geometryStyle = this.collisionMovingBoxStyle;

    this.movingBoxAccelerationText = new TextGraphic(new Point(20,80), `MBA-{x:${this.movingBoxAcceleration.x} y:${this.movingBoxAcceleration.y}}`);
    this.movingBoxText = new TextGraphic(new Point(120,80), `MB-{Top:${this.movingBox.y} Bottom:${this.movingBox.y + this.movingBox.height}, Left:${this.movingBox.x}, Right:${this.movingBox.x + this.movingBox.width}}`);
    this.collisionDebugInformation = new TextGraphic(new Point(120,95), `MB-{Top:${this.collisionBox.y} Bottom:${this.collisionBox.y + this.collisionBox.height}, Left:${this.collisionBox.x}, Right:${this.collisionBox.x + this.collisionBox.width}}`);
  }

  update() {
    this.handleInput();

    this.movingBox.x += this.movingBoxAcceleration.x;
    this.movingBox.y += this.movingBoxAcceleration.y

    if(this.isInsideView(this.collisionBox, this.movingBox)) {
      this.movingBox.geometryStyle = this.collisionMovingBoxStyle;
    } else {
      if(this.collisionBox.y >= this.movingBox.y) {
        this.movingBox.y = this.collisionBox.y + this.collisionBox.height - this.movingBox.height - 1;
      } 
      else if(this.collisionBox.y + this.collisionBox.height <= this.movingBox.y + this.movingBox.height) {
        this.movingBox.y = this.collisionBox.y + 1;
      }  
      if(this.collisionBox.x >= this.movingBox.x) {
        this.movingBox.x = this.collisionBox.x + this.collisionBox.width - this.movingBox.width - 1;
      } 
      else if (this.collisionBox.x + this.collisionBox.width <= this.movingBox.x + this.movingBox.width) {
        this.movingBox.x = this.collisionBox.x + 1;
      }
    }

    this.printDebugInformation();
  }

  draw() {
    this.collisionBox.draw();
    this.movingBox.draw();
    this.movingBoxAccelerationText.draw();
    this.movingBoxText.draw();
    this.collisionDebugInformation.draw();
  }

  isInsideView(camera, rectangle) {
    let topCamera = camera.y;
    let botCamera = camera.y + camera.height;
    let leftCamera = camera.x;
    let rightCamera = camera.x + camera.width;

    return (leftCamera < rectangle.x && 
      rightCamera > rectangle.x + rectangle.width && 
      topCamera < rectangle.y && 
      botCamera > rectangle.y + rectangle.height);
  }

  isCollidingEdges(rectangle1, rectangle2) {
    let topRect1 = rectangle1.y;
    let botRect1 = rectangle1.y + rectangle1.height;
    let leftRect1 = rectangle1.x;
    let rightRect1 = rectangle1.x + rectangle1.width;

    let topRect2 = rectangle2.y;
    let botRect2 = rectangle2.y + rectangle2.height;
    let leftRect2 = rectangle2.x;
    let rightRect2 = rectangle2.x + rectangle2.width;

    return (leftRect1 < rightRect2 && 
            rightRect1 > leftRect2 && 
            topRect1 < botRect2 && 
            botRect1 > topRect2);
  }

  registerKeys() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.W);
    this.keyboard.registerKey(KeyboardKey.A);
    this.keyboard.registerKey(KeyboardKey.S);
    this.keyboard.registerKey(KeyboardKey.D);
    this.keyboard.registerKey(KeyboardKey.UP);
    this.keyboard.registerKey(KeyboardKey.RIGHT);
    this.keyboard.registerKey(KeyboardKey.DOWN);
    this.keyboard.registerKey(KeyboardKey.LEFT);
    this.keyboard.registerKey(KeyboardKey.P);
  }

  handleInput() {
    if(this.keyboard.keyDownHeld(KeyboardKey.W) || this.keyboard.keyDownHeld(KeyboardKey.UP)) {
      if(this.useAcceleration)
        this.movingBoxAcceleration.y -= 1;
      else
        this.movingBox.y -= 1;
    }
    if(this.keyboard.keyDownHeld(KeyboardKey.S) || this.keyboard.keyDownHeld(KeyboardKey.DOWN)) {
      if(this.useAcceleration)
        this.movingBoxAcceleration.y += 1;
      else
        this.movingBox.y += 1;
    }
    if(this.keyboard.keyDownHeld(KeyboardKey.A) || this.keyboard.keyDownHeld(KeyboardKey.LEFT)) {
      if(this.useAcceleration)
        this.movingBoxAcceleration.x -= 1;
      else
        this.movingBox.x -= 1;
    }
    if(this.keyboard.keyDownHeld(KeyboardKey.D) || this.keyboard.keyDownHeld(KeyboardKey.RIGHT)) {
      if(this.useAcceleration)
        this.movingBoxAcceleration.x += 1;
      else
        this.movingBox.x += 1;
    }
    if(this.keyboard.keyDownOnce(KeyboardKey.P)) {
      this.isPaused = !this.isPaused;
    }
  }

  printDebugInformation() {
    if(!this.isPaused) {
      console.log(`MovingBox:(x:${this.movingBox.x}, y:${this.movingBox.y})`);
      console.log(`CollisionBox:(x:${this.collisionBox.x}, y:${this.collisionBox.y}, width:${this.collisionBox.width}, height:${this.collisionBox.height})`);
    }
    this.movingBoxAccelerationText.text = `MB- {x:${this.movingBoxAcceleration.x} y:${this.movingBoxAcceleration.y}}`;
    this.movingBoxText.text = `MB-{Top:${this.movingBox.y} Bottom:${this.movingBox.y + this.movingBox.height}, Left:${this.movingBox.x}, Right:${this.movingBox.x + this.movingBox.width}}`;
    this.collisionDebugInformation.text = `MB-{Top:${this.collisionBox.y} Bottom:${this.collisionBox.y + this.collisionBox.height}, Left:${this.collisionBox.x}, Right:${this.collisionBox.x + this.collisionBox.width}}`;
  }
}
