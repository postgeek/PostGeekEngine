import Scene from 'gameEngine/scene/Scene';
import AssetCache from 'core/managers/AssetCache';
import SoundObject from 'soundEngine/SoundObject';

export default class SoundScene extends Scene {
  create() {
    this.cache = new AssetCache();
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.loadAsset('audio').then(() => {
      console.log('audio loaded!')
      const sound = new SoundObject(this.cache.getAsset('audio'));
      console.log('audio started!')

      sound.play(5000);
    });
  }

  update() {
  }

  draw() {
  }
}
