import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import ContainerObject from 'core/ContainerObject';
import HipSquarePhysicsComponent from './HipSquarePhysicsComponent';
import HipSquareGraphicsComponent from './HipSquareGraphicsComponent';
import RectangleGameObject from './RectangleGameObject';


class CollisionScene extends Scene {
  create() {
    this.type = 'both';
    this.createCollision(this.type || undefined);
  }

  createEddyCollision() {
    this.rectangle = new RectangleGameObject(this);
    this.rectangleText = new TextGraphic(new Vec2D(3, 12), '');
  }

  updateEddyCollision() {
    this.rectangle.update();
    this.rectangleText.text = `Rectangle is at x: '${this.rectangle.graphics.rectangle.x}' y: '${this.rectangle.graphics.rectangle.y}'`;
  }

  drawEddyCollision(timeStep) {
    this.rectangle.draw(timeStep);
    this.rectangleText.draw(timeStep);
  }

  createAlexCollision() {
    this.hipSquare = new ContainerObject();
    const hipSquarePhysicsComponent = new HipSquarePhysicsComponent(this.hipSquare);
    const hipSquareGraphicsComponent = new HipSquareGraphicsComponent(this.hipSquare);
  }

  updateAlexCollision() {
    this.hipSquare.update();
  }

  drawAlexCollision(timeStep) {
    this.hipSquare.draw(timeStep);
  }

  draw() {
    this.drawCollision(this.type);
  }

  update(timeStep) {
    this.updateCollision(this.type);
  }

  createCollision(type) {
    switch (type) {
      case 'alex':
        this.createAlexCollision();
        break;
      case 'eddy':
        this.createEddyCollision();
        break;
      default:
        this.createAlexCollision();
        this.createEddyCollision();
        break;
    }
  }

  drawCollision(type, timeStep) {
    switch (type) {
      case 'alex':
        this.drawAlexCollision(timeStep);
        break;
      case 'eddy':
        this.drawEddyCollision(timeStep);
        break;
      default:
        this.drawAlexCollision(timeStep);
        this.drawEddyCollision(timeStep);
        break;
    }
  }

  updateCollision(type) {
    switch (type) {
      case 'alex':
        this.updateAlexCollision();
        break;
      case 'eddy':
        this.updateEddyCollision();
        break;
      default:
        this.updateAlexCollision();
        this.updateEddyCollision();
        break;
    }
  }
} export default CollisionScene;
