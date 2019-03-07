import Game from 'Game';
import DemoScene from './DemoScene';

export default class DemoGame extends Game {
  constructor() {
    super({
      debug: false,
    });
  }

  start() {
    this.demoScene = new DemoScene(this);
    super.start();
  }


  update() {
    this.demoScene.update();
  }

  draw() {
    super.draw();
    this.demoScene.draw(this.context);
  }
}
