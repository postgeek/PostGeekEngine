import Scene from 'gameEngine/scene/Scene';
import BoxStackAll from './levels/BoxStackAll';

class PhysicsEngineScene extends Scene {
  create() {
    this.boxStack = new BoxStackAll();
    this.boxStack.create();
  }

  update(timeStep) {
    this.boxStack.update(timeStep);
  }

  draw(timeStep) {
    this.boxStack.draw(timeStep);
  }
} export default PhysicsEngineScene;
