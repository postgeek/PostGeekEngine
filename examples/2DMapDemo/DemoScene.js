import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import FromTiledJsonToMap2DConfig from 'gameEngine/maps/converters/FromTiledJsonToMap2DConfig';
import Map2D from 'gameEngine/maps/Map2D';

export default class DemoScene extends Scene {

  preload() {
    this.loadImage('george', './assets/george.png');
    this.loadSprite('georgeSprite', './assets/json/george2.json');
  }

  create() {
    this.Point = new Point(0, 0);
    this.animation = 0;
    this.loaded = false;
    this.mapLoaded = false;

    this.george = this.retrieveImage('george');


    this.currentDirection = "WALK_LEFT";

    this.loadedImages = {};

    this.anim = 0;
    this.ticks = 0;

    this.cache.registerAsset('map', './assets/demo_map.json');
    this.cache.loadAsset('map').then(() => {
      this.cache.getAssetAsync('map').then((asset) => {
        const mapConfig = JSON.parse(asset);
        const map2DConfig = FromTiledJsonToMap2DConfig(mapConfig, './assets/');
        this.Map = new Map2D(map2DConfig);
        this.Map.load().then(() => {
          this.mapLoaded = true;
        });
      });
    });
  }

  update() {
  }

  draw() {
    if (this.mapLoaded) {
      this.Map.draw();
    }
    this.george.draw();
  }
}
