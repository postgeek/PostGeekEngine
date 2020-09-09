import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import ServiceLocator from 'core/ServiceLocator';
import KeyboardKey from 'inputEngine/KeyboardKey';
import QuadTree from 'physicsEngine/collision/quadTree/QuadTree';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import GeometryStyle from 'renderingEngine/geometry/GeometryStyle';
import Color from 'renderingEngine/colors/Color'
import HSLAColor from 'renderingEngine/colors/HSLAColor'
import Line from '../../src/renderingEngine/geometry/Line';
import MouseButton from '../../src/inputEngine/MouseButton';

export default class QuadTreeDemoScene extends Scene {  
  create() {
    this.registerKeys();

    this.isPaused = true;
    this.useAcceleration = false;

    this.collisionMovingBoxStyle = new GeometryStyle({
      fillStyle: Color.GREEN,
    });
    this.movingBoxStyle = new GeometryStyle({
      fillStyle: Color.RED,
    });

    this.mouse = ServiceLocator.instance.locate('mouse');
    this.createdRectangles = [];
    this.createdLines = [];

    this.movingBoxAcceleration = new Point(1,1);

    this.collisionBox = new Rectangle(new Point(20, 100), 1160, 470);

    this.createQuadTree();

    this.movingBox = new Rectangle(new Point(300, 220), 10, 10);
    this.movingBox.geometryStyle = this.collisionMovingBoxStyle;

    this.movingBoxAccelerationText = new TextGraphic(new Point(20,80), `MBA-{x:${this.movingBoxAcceleration.x} y:${this.movingBoxAcceleration.y}}`);
    this.movingBoxText = new TextGraphic(new Point(120,80), `MB-{Top:${this.movingBox.y} Bottom:${this.movingBox.y + this.movingBox.height}, Left:${this.movingBox.x}, Right:${this.movingBox.x + this.movingBox.width}}`);
    this.collisionDebugInformation = new TextGraphic(new Point(120,95), `MB-{Top:${this.collisionBox.y} Bottom:${this.collisionBox.y + this.collisionBox.height}, Left:${this.collisionBox.x}, Right:${this.collisionBox.x + this.collisionBox.width}}`);
  }

  createQuadTree() {
    const quadTreeBoxStartX = 20;
    const quadTreeBoxStartY = 100;
    const widthOfQuadTreeBox = 290;
    const heightOfQuadTreeBox = 235;

    this.quadTree = new QuadTree();

    const quadTreeColors = [
      Color.LAVENDER,
      Color.CORAL,
      Color.ORCHID,
      Color.AQUA,
      Color.NAVY,
      Color.DARKVIOLET,
      Color.SEAGREEN,
      Color.SALMON,
    ];

    for(let i = 0; i < 2; i++) {
      for(let k = 0; k < 4; k++) {
        let quadTreeX = quadTreeBoxStartX + (widthOfQuadTreeBox * k);
        let quadTreeY = quadTreeBoxStartY + (heightOfQuadTreeBox * i);
        let color = quadTreeColors[ i * 4 + k ].hslaColor;
        let hslaColor = new HSLAColor(
          color.hue,
          color.saturation,
          color.lightness,
          0.2
        );
        this.quadTree.createQuadTreeBox(quadTreeX, quadTreeY, widthOfQuadTreeBox, heightOfQuadTreeBox, hslaColor);
      }
    }
  }

  update() {
    this.createdLines = [];
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

    this.updateCreatedRectangles();
    this.updateQuadTreeBoxes();
    this.printDebugInformation();
  }

  draw(deltaTime) {
    this.collisionBox.draw();
    this.quadTree.quadTreeBoxes.forEach(quadTreeBox => quadTreeBox.draw());

    if(this.useAcceleration) {
      this.movingBox.x = Math.round(this.movingBox.x + deltaTime * this.movingBoxAcceleration.x);
      this.movingBox.y = Math.round(this.movingBox.y + deltaTime * this.movingBoxAcceleration.y);
    }
    this.movingBox.draw();
    this.movingBoxAccelerationText.draw();
    this.movingBoxText.draw();
    this.collisionDebugInformation.draw();
    this.drawCreatedRectangles();
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

  /**
   * Move to Collision or Physics Engine when it's ready
   */
  resolveCollision(sourceCollidingObject, targetCollidingObject) {
    var newRect = sourceCollidingObject.clone();
    var newRectPoints = sourceCollidingObject.point.clone();
    
    newRect.y = newRectPoints.y - 1;
    if(!this.isCollidingEdges(newRect, targetCollidingObject)) {
      sourceCollidingObject.y -= 1;
    }
    newRect.y = newRectPoints.y + 1;
    if(!this.isCollidingEdges(newRect, targetCollidingObject)) {
      sourceCollidingObject.y += 1;
    }  
    newRect.x = newRectPoints.x - 1;
    if(!this.isCollidingEdges(newRect, targetCollidingObject)) {
      sourceCollidingObject.x -= 1;
    }
    newRect.x = newRectPoints.x + 1;
    if(!this.isCollidingEdges(newRect, targetCollidingObject)) {
      sourceCollidingObject.x += 1;
    }     
  }

  isCollidingLeft(sourceRectangle, targetRectangle) {
    let sourceRectangleSideLieft = sourceRectangle.x;
    let targetRectangleSideRight = targetRectangle.x + targetRectangle.width;
    return (sourceRectangleSideLieft < targetRectangleSideRight);
  }

  isCollidingRight(sourceRectangle, targetRectangle) {
    let sourceRectangleSideRight = sourceRectangle.x + sourceRectangle.width;
    let targetRectangleSideLieft = targetRectangle.x;
    return (sourceRectangleSideRight > targetRectangleSideLieft);
  }

  isCollidingBottom(sourceRectangle, targetRectangle) {
    let sourceRectangleSideTop = sourceRectangle.y;
    let targetRectangleSideBottom = targetRectangle.y + targetRectangle.height;
    return sourceRectangleSideTop < targetRectangleSideBottom;
  }

  isCollidingTop(sourceRectangle, targetRectangle) {
    let sourceRectangleSideBottom = sourceRectangle.y + sourceRectangle.height;
    let targetRectangleSideTop = targetRectangle.y;
    return sourceRectangleSideBottom > targetRectangleSideTop;
  }

  isCollidingEdges(sourceRectangle, targetRectangle) {
    return  this.isCollidingLeft(sourceRectangle, targetRectangle) &&
            this.isCollidingRight(sourceRectangle, targetRectangle) &&
            this.isCollidingTop(sourceRectangle, targetRectangle) &&
            this.isCollidingBottom(sourceRectangle, targetRectangle);
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
    this.keyboard.registerKey(KeyboardKey.X);
    this.keyboard.registerKey(KeyboardKey.C);
    this.keyboard.registerKey(KeyboardKey.DELETE);
  }

  handleInput() {
    if(this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      let mouseX = this.mouse.x;
      let mouseY = this.mouse.y;
      this.createRectangle(mouseX, mouseY);
    }
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
    if(this.keyboard.keyDownOnce(KeyboardKey.X)) {
      this.movingBoxAcceleration.x = 0;
      this.movingBoxAcceleration.y = 0;
    }
    if(this.keyboard.keyDownOnce(KeyboardKey.DELETE)) {
      this.clearCreatedRectangles();
    }
    if(this.keyboard.keyDownOnce(KeyboardKey.C)) {
      this.createRectangleAtRandomLocation();
    }
  }

  createRectangle(x, y) {
    if(x > 30 && x < 1138 && y > 109 && y < 559) {
      let rectPoint = new Point(x,y)
      let rectangle = new Rectangle(rectPoint, 10, 10)
      let rectangleStyle = new GeometryStyle({
        fillStyle: Color.PINK,
        strokeStyle: Color.BLACK
      });
      rectangle.geometryStyle = rectangleStyle
      this.createdRectangles.push(rectangle);
    }
  }

  createRectangleAtRandomLocation() {
    let x =  Math.random() * (1169 - 31) + 31;
    let y =  Math.random() * (559 - 109) + 109;
    this.createRectangle(x,y)
  }

  updateQuadTreeBoxes() {
    this.createdLines = [];
    for(let i = 0; i < this.quadTree.quadTreeBoxes.length; i++) {
      var quadTreeBox = this.quadTree.quadTreeBoxes[i];
      if(this.isCollidingEdges(quadTreeBox.rectangle, this.movingBox)) {
        quadTreeBox.rectangle.geometryStyle.strokeStyle = Color.RED;

        this.createdRectangles.forEach(function(rectangle) {
          if(this.isCollidingEdges(quadTreeBox.rectangle, rectangle)) {
            const movingBoxCenterPoint = this.movingBox.centerPoint
            const rectangleCenterPoint = rectangle.centerPoint;
            //let line = new Line(rectangleCenterPoint, movingBoxCenterPoint);
            if(this.isCollidingEdges(this.movingBox, rectangle)) {
              this.resolveCollision(this.movingBox, rectangle);
              rectangle.geometryStyle.strokeStyle = Color.RED;
              //line.geometryStyle.strokeStyle = Color.RED;
            } else {
              rectangle.geometryStyle.strokeStyle = Color.BLACK;
            }
            //this.createdLines.push(line);
          }
        }, this);
      } else {
        quadTreeBox.rectangle.geometryStyle.strokeStyle = undefined;
      }
    }
  }

  updateCreatedRectangles() {
    // Do nothing for now
  }

  clearCreatedRectangles() {
    this.createdRectangles = [];
  }

  drawCreatedRectangles() {
    this.createdRectangles.forEach(rectangle => rectangle.draw())
    this.createdLines.forEach(line => line.draw());
  }

  printDebugInformation() {
    this.movingBoxAccelerationText.text = `MB- {x:${this.movingBoxAcceleration.x} y:${this.movingBoxAcceleration.y}}`;
    this.movingBoxText.text = `MB-{Top:${this.movingBox.y} Bottom:${this.movingBox.y + this.movingBox.height}, Left:${this.movingBox.x}, Right:${this.movingBox.x + this.movingBox.width}}`;
    this.collisionDebugInformation.text = `MB-{Top:${this.collisionBox.y} Bottom:${this.collisionBox.y + this.collisionBox.height}, Left:${this.collisionBox.x}, Right:${this.collisionBox.x + this.collisionBox.width}}`;
  }
}
