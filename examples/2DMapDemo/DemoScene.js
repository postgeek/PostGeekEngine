import Scene from 'gameEngine/scene/Scene';
import Point from 'core/Point';
import AssetCache from 'core/managers/AssetCache';
import FromTiledJsonToMap2DConfig from 'gameEngine/maps/converters/FromTiledJsonToMap2DConfig';
import Map2D from 'gameEngine/maps/Map2D';
import ImageLoader from '../../src/renderingEngine/images/ImageLoader';
import GraphicImage from '../../src/renderingEngine/images/GraphicImage';
import ImageAsset from '../../src/renderingEngine/images/ImageAsset';

export default class DemoScene extends Scene {
  create() {
    this.Point = new Point(0, 0);
    this.animation = 0;
    this.loaded = false;
    this.cache = new AssetCache();
    this.mapLoaded = false;
    this.georgeLoaded = false;

    this.loadedImages = {};

    this.anim = 0

    var imageLoader = new ImageLoader(this.cache);

    var imageAssets = [
      new ImageAsset('george', './assets/george.png'),
      new ImageAsset('postgeek', './assets/post-geek-logo.png'),
    ];

    var promises = imageLoader.loadImages(imageAssets);
    
    promises.then((promises) => {
      promises.forEach((imageAsset) => {
        this.georgeLoaded = true;
        this.loadedImages[imageAsset.id] = new GraphicImage(imageAsset.image);
      })
    });

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
    if(this.georgeLoaded) {
      this.loadedImages['george'].drawImageWithMask(new Point(20,20), new Point(0,48 * (this.anim % 4)), 48, 48);
      this.anim++;
    }
  }
}
