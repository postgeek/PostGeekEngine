import AnimatedSpriteConfig from "./AnimatedSpriteConfig";
import Sprite from "./Sprite";
import SpriteSheet from "./SpriteSheet";
import SpriteSheetConfig from "./SpriteSheetConfig";

export default class SpriteLoader {
    constructor(cache, imageLoader) {
        this.cache = cache;
        this._imageLoader = imageLoader;
        this._loadedSprites = {};
    }

    getSprite() {
        return this._loadedSprites[`sprite-${key}`];
    }

    /*
    static addSpriteAsync(assetUrl) {
        return new Promise((resolve) => {
          const image = new Image();
          image.src = window.URL.createObjectURL(assetUrl);
          image.onload = () => {
            resolve(image);
          };
        });
      }
    */

    async loadSpriteAsync(spriteId, spriteJSONUrl) {
      this.cache.registerAsset(spriteId, spriteJSONUrl);
      await this.cache.loadAsset(spriteId);
      var asset = await this.cache.getAsset(spriteId);
      var spriteAssetJSON = JSON.parse(asset);
      var image = await this._imageLoader.loadImageAsync(spriteAssetJSON.ID, spriteAssetJSON.SPRITE_SHEET_URL);
      var spriteSheetImage = this._imageLoader.getImage(spriteAssetJSON.ID);
      var spriteSheet = new SpriteSheet(spriteSheetImage, new SpriteSheetConfig(spriteAssetJSON.SpriteSheet));
      var spriteAnimationConfiguration = new AnimatedSpriteConfig(spriteAssetJSON.animations[0].sprites);
      console.log(spriteAnimationConfiguration);
      var sprite = new Sprite(spriteSheet, spriteAssetJSON);
      console.log(sprite);
    }
}