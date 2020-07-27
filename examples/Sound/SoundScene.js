import Scene from 'gameEngine/scene/Scene';
import AssetCache from 'core/managers/AssetCache';
import SoundObject from 'soundEngine/SoundObject';

export default class SoundScene extends Scene {
  create() {
    this.cache = new AssetCache();
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.loadAsset('audio').then(() => {
      var t0 = performance.now()
      const sound = new SoundObject(this.cache.getAsset('audio'));
      var t1 = performance.now()
      sound.play(5000);
      var t2 = performance.now()

      console.log("Call to New Sound Object took " + (t1 - t0) + " milliseconds.")
      console.log("Call to play sound took " + (t2 - t1) + " milliseconds.")
    });
  }

  update() {
  }

  draw() {
  }
}
