import Scene from 'gameEngine/scene/Scene';
import BoxStack from './levels/BoxStack';

class PhysicsEngineScene extends Scene {
  create() {
    this.title = 'PhysicsEngineScene';
    this.boxStack = new BoxStack();
    this.boxStack.create();
  }

  update(timeStep) {
    this.boxStack.update(timeStep);
  }

  draw(timeStep) {
    this.boxStack.draw(timeStep);
  }
} export default PhysicsEngineScene;
