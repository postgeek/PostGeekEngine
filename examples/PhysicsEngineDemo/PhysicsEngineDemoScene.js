import Scene from 'gameEngine/scene/Scene';
import BallExample from './Examples/BallExample';
import BallCollision from './Examples/BallCollision';

export default class PhysicsEngineDemoScene extends Scene {  
  create() {
    this.ballExample = new BallExample();
    this.ballCollision = new BallCollision();

    this.currentExample = this.ballCollision;
  }

  update(timestep) {
    this.currentExample.update(timestep);
  }

  draw() {
    this.currentExample.draw();
  }
}
