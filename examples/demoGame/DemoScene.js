import Scene from 'scene/Scene';
import Point from 'physics/Point';
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
    this.mapLoaded = false;

    this.cache.registerAsset('map', './assets/demo_map.json');
    this.cache.loadAsset('map').then(() => {
      const mapConfig = JSON.parse(this.cache.getAsset('map'));
      const map2DConfig = FromTiledJsonToMap2DConfig(mapConfig, './assets/');
      this.Map = new Map2D(this.Game, map2DConfig);
      this.Map.load().then(() => {
        this.mapLoaded = true;
      })
    });
  }

  update() {
  }

  draw() {
    if(this.mapLoaded) {
      this.Map.draw();
    }
  }
}
