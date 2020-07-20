import Scene from 'gameEngine/scene/Scene';
import AssetCache from 'core/managers/AssetCache';

export default class SoundScene extends Scene {
  create() {
    this.cache = new AssetCache();
    this.cache.registerAsset('audio', './assets/sound/gametheme.mp3');
    this.cache.loadAsset('audio').then(() => {
      console.log('audio loaded!')
    });
  }

  update() {
  }

  draw() {
  }
}
