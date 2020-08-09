import Scene from 'gameEngine/scene/Scene';
import AssetCache from 'core/managers/AssetCache';
import SoundObject from 'soundEngine/SoundObject';
import Point from 'core/Point';
import Button from 'HUDEngine/components/Button';
import MouseButton from 'inputEngine/MouseButton';
import ServiceLocator from 'core/ServiceLocator';

export default class SoundScene extends Scene {
  create() {
    this.cache = new AssetCache();
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.loadAsset('audio').then(() => {
      var t0 = performance.now()
      this.sound = new SoundObject(this.cache.getAsset('audio'));
      var t1 = performance.now()
      this.sound.play(5000);
      var t2 = performance.now()

      console.log("Call to New Sound Object took " + (t1 - t0) + " milliseconds.")
      console.log("Call to play sound took " + (t2 - t1) + " milliseconds.")
    });

    this.mouse = ServiceLocator.instance.locate('mouse');

    // point, text, clickCallback
    this.playButton = new Button(new Point(20,20), "Play", (event) => this.playSound(event));
    this.pauseButton = new Button(new Point(70,20), "Pause", (event) => this.pauseSound(event));
    this.stopButton = new Button(new Point(130,20), "Stop", (event) => this.stopSound(event));
 }

  update() {
    if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
      const { x, y } = this.mouse;
      this.playButton.update({x,y});
      this.stopButton.update({x,y});
      this.pauseButton.update({x,y});
    }
  }

  draw() {
    this.playButton.draw();
    this.pauseButton.draw();
    this.stopButton.draw();
  }

  playSound() {
    this.sound.play();
  }

  stopSound() {
    this.sound.stop();
  }

  pauseSound() {
    this.sound.pause();
  }
}
