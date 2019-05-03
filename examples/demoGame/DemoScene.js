import Scene from 'scene/Scene';
import Point from 'physics/Point';
import SpriteSheet from 'graphics/images/spritesheets/SpriteSheet';
import SpriteSheetConfig from 'graphics/images/spritesheets/SpriteSheetConfig';
import AssetCache from 'managers/AssetCache';
import FromTiledJsonToMap2DConfig from 'maps/converters/FromTiledJsonToMap2DConfig';
import Map2D from 'maps/Map2D';

export default class DemoScene extends Scene {
  create() {
    this.Point = new Point(0, 0);
    this.animation = 0;
    this.loaded = false;
    this.cache = new AssetCache();
    this.image = new Image();

    this.cache.registerAsset('map', './assets/demo_map.json');
    this.cache.loadAsset('map').then(() => {
      const mapConfig = JSON.parse(this.cache.getAsset('map'));

      this.cache.registerAsset('tilesetImg', './assets/' + mapConfig.tilesets[0].image);
      this.cache.loadAsset('tilesetImg').then(() => {
        const tilesetImg = new Image();
        tilesetImg.src = window.URL.createObjectURL(this.cache.getAsset('tilesetImg'));
        tilesetImg.onload = () => {
          const map2DConfig = FromTiledJsonToMap2DConfig(mapConfig, tilesetImg);
          this.Map = new Map2D(this.Game, map2DConfig)
        };
      });
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
    if(this.Map !== undefined) {
      this.Map.draw();
    }
  }
}
