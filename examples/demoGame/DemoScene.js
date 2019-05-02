import Scene from 'scene/Scene';
import Point from 'physics/Point';
import SpriteSheet from 'graphics/images/spritesheets/SpriteSheet';
import SpriteSheetConfig from 'graphics/images/spritesheets/SpriteSheetConfig';
import AssetCache from 'managers/AssetCache';

export default class DemoScene extends Scene {
  create() {
    this.Point = new Point(0, 0);
    this.animation = 0;
    this.loaded = false;
    this.cache = new AssetCache();
    this.cache.registerAsset('key1', './assets/george.png');
    this.cache.registerAsset('key2', './assets/json/george.json');
    this.cache.loadAsset('key2');
    this.image = new Image();
    this.cache.loadAsset('key1').then(() => {
      const cachedAsset = this.cache.getAsset('key1');
      const imageURL = window.URL.createObjectURL(cachedAsset);
      this.image.src = imageURL;
    });
    this.image.onload = () => {
      const spriteSheetConfig = new SpriteSheetConfig(JSON.parse(this.cache.getAsset('key2')));
      this.spriteSheet = new SpriteSheet(this.Game.context, this.image, spriteSheetConfig);
      this.loaded = true;
    };
  }

  update() {
  }

  draw() {
  }
}
