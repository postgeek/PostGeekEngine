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

    this.spriteSheetJson ={
      "George": {
      "ID": "george",
      "SPRITE_SHEET_URL": "./assets/george.png",
      "FRAMES_PER_ANIMATION": 20,
      "WALK_DOWN": [
      { "point": {x: 0, y: 0},"width": 48,"height": 48 },
      { "point": {x: 0, y: 48},"width": 48,"height": 48 },
      { "point": {x: 0, y: 96},"width": 48,"height": 48 },
      { "point": {x: 0, y: 144},"width": 48,"height": 48 }
      ],
      "WALK_LEFT": [
      { "point": {x: 48, y: 0},"width": 48,"height": 48 },
      { "point": {x: 48, y: 48},"width": 48,"height": 48 },
      { "point": {x: 48, y: 96},"width": 48,"height": 48 },
      { "point": {x: 48, y: 144},"width": 48,"height": 48 }
      ],
      "WALK_UP": [
      { "point": {x: 96, y: 0},"width": 48,"height": 48 },
      { "point": {x: 96, y: 48},"width": 48,"height": 48 },
      { "point": {x: 96, y: 96},"width": 48,"height": 48 },
      { "point": {x: 96, y: 144},"width": 48,"height": 48 }
      ],
      "WALK_RIGHT": [
      { "point": {x: 144, y: 0},"width": 48,"height": 48 },
      { "point": {x: 144, y: 48},"width": 48,"height": 48 },
      { "point": {x: 144, y: 96},"width": 48,"height": 48 },
      { "point": {x: 144, y: 144},"width": 48,"height": 48 }
      ]
      }
      };

      this.currentDirection = "WALK_LEFT";


    this.loadedImages = {};

    this.anim = 0;
    this.ticks = 0;
    this.framesPerAnimation = Number(this.spriteSheetJson["George"]["FRAMES_PER_ANIMATION"]);

    var imageLoader = new ImageLoader(this.cache);

    var imageAssets = [
      new ImageAsset(this.spriteSheetJson["George"]["ID"], this.spriteSheetJson["George"]["SPRITE_SHEET_URL"]),
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
      var currentAnimation = this.spriteSheetJson["George"][this.currentDirection][this.anim % 4];
      var point = new Point(currentAnimation.point.x, currentAnimation.point.y);
      this.loadedImages[this.spriteSheetJson["George"]["ID"]].drawImageWithMask(
        new Point(20,20), 
        point, currentAnimation.width, currentAnimation.height);

      this.ticks++;
      if(this.ticks > this.framesPerAnimation) {
        this.ticks = 0;
        this.anim++;
      }
    }
  }
}
