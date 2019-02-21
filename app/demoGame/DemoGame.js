import Game from '../Game';
import DemoScene from './DemoScene';

export default class DemoGame extends Game {
  constructor() {
    super({
      debug: false,
    });

    this.demoScene = new DemoScene();
  }


  update() {
    this.demoScene.update();
  }

  draw() {
    super.draw();
    this.demoScene.draw(this.context);
  }
}
