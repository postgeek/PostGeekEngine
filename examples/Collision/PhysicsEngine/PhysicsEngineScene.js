import Scene from '../../../src/gameEngine/scene/Scene';
import BoxStack from './levels/BoxStack';

class PhysicsEngineScene extends Scene {
  create() {
    console.log('creating stuff');
    this.boxStack = new BoxStack();
    this.boxStack.create();
  }

  update(timeStep) {
    console.log('updating stuff');
    this.boxStack.update(timeStep);
  }

  draw(timeStep) {
    console.log('drawing stuff');
    this.boxStack.draw(timeStep);
  }
}
export default PhysicsEngineScene;
