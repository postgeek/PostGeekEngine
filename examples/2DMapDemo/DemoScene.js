import Scene from 'gameEngine/scene/Scene';
import Vec2D from 'core/Vec2D';
import AssetCache from 'core/managers/AssetCache';
import FromTiledJsonToMap2DConfig from 'gameEngine/maps/converters/FromTiledJsonToMap2DConfig';
import Map2D from 'gameEngine/maps/Map2D';

export default class DemoScene extends Scene {
  create() {
    this.Point = new Vec2D(0, 0);
    this.animation = 0;
    this.loaded = false;
    this.cache = new AssetCache();
    this.image = new Image();
    this.mapLoaded = false;

    this.cache.registerAsset('map', './assets/demo_map.json');
    this.cache.loadAsset('map').then(() => {
      const mapConfig = JSON.parse(this.cache.getAsset('map'));
      const map2DConfig = FromTiledJsonToMap2DConfig(mapConfig, './assets/');
      this.Map = new Map2D(map2DConfig);
      this.Map.load().then(() => {
        this.mapLoaded = true;
      });
    });
  }

  update() {
  }

  draw() {
    if (this.mapLoaded) {
      this.Map.draw();
    }
  }
}
