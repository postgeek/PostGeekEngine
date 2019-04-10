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
    this.image = new Image();
    this.cache.loadAsset('key1').then(() => {
      const cachedAsset = this.cache.getAsset('key1');
      const imageURL = window.URL.createObjectURL(cachedAsset);
      this.image.src = imageURL;
    });
    this.image.onload = () => {
      const spriteSheetConfig = new SpriteSheetConfig(
        {
          width: this.image.width,
          height: this.image.height,
          spriteConfig: {
            spriteName: 'george',
            animations: [{
              animationName: 'WALK_DOWN',
              sprites: [
                {
                  x: 0, y: 0, width: 48, height: 48, frame: 0,
                },
                {
                  x: 0, y: 48, width: 48, height: 48, frame: 1,
                },
                {
                  x: 0, y: 96, width: 48, height: 48, frame: 2,
                },
                {
                  x: 0, y: 144, width: 48, height: 48, frame: 3,
                },
              ],
            },
            {
              animationName: 'WALK_LEFT',
              sprites: [
                {
                  x: 48, y: 0, width: 48, height: 48, frame: 0,
                },
                {
                  x: 48, y: 48, width: 48, height: 48, frame: 1,
                },
                {
                  x: 48, y: 96, width: 48, height: 48, frame: 2,
                },
                {
                  x: 48, y: 144, width: 48, height: 48, frame: 3,
                },
              ],
            },
            {
              animationName: 'WALK_UP',
              sprites: [
                {
                  x: 96, y: 0, width: 48, height: 48, frame: 0,
                },
                {
                  x: 96, y: 48, width: 48, height: 48, frame: 1,
                },
                {
                  x: 96, y: 96, width: 48, height: 48, frame: 2,
                },
                {
                  x: 96, y: 144, width: 48, height: 48, frame: 3,
                },
              ],
            },
            {
              animationName: 'WALK_RIGHT',
              sprites: [
                {
                  x: 144, y: 0, width: 48, height: 48, frame: 0,
                },
                {
                  x: 144, y: 48, width: 48, height: 48, frame: 1,
                },
                {
                  x: 144, y: 96, width: 48, height: 48, frame: 2,
                },
                {
                  x: 144, y: 144, width: 48, height: 48, frame: 3,
                },
              ],
            },
            ],
          },
        },
      );

      this.spriteSheet = new SpriteSheet(this.Game.context, this.image, spriteSheetConfig);
      this.loaded = true;

      this.maxAnimations = this.spriteSheet.getAnimationLengthForSpriteAnimation('george', 'WALK_DOWN');
    };
  }

  update() {
    this.animation += 1;
    if (this.maxAnimations <= this.animation) {
      this.animation = 0;
    }
  }

  draw() {
    if (this.loaded) {
      this.spriteSheet.drawSpriteInfo(this.Point, 'george', 'WALK_DOWN', this.animation);
    }
  }
}
