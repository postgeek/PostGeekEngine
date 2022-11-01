import AnimatedSpriteConfig from './AnimatedSpriteConfig';
import Sprite from './Sprite';
import SpriteSheet from './SpriteSheet';
import SpriteSheetConfig from './SpriteSheetConfig';

export default class SpriteLoader {
  constructor(cache, imageCache) {
    this._cache = cache;
    this._imageCache = imageCache;
    this._loadedSprites = {};
  }

  getSprite(key) {
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
    this._cache.registerAsset(spriteId, spriteJSONUrl);
    await this._cache.loadAsset(spriteId);
    const asset = await this._cache.getAssetAsync(spriteId);
    const spriteAssetJSON = JSON.parse(asset);
    const image = await this._imageLoader.loadImageAsync(
      spriteAssetJSON.ID,
      spriteAssetJSON.SPRITE_SHEET_URL,
    );
    const spriteSheet = new SpriteSheet(
      image,
      new SpriteSheetConfig(spriteAssetJSON.SpriteSheet),
    );
    const spriteAnimationConfiguration = new AnimatedSpriteConfig(
      spriteAssetJSON.animations[0].sprites,
    );
    const sprite = new Sprite(spriteSheet, spriteAssetJSON);
    this._loadedSprites[`sprite-${spriteId}`] = image;
    return image;
  }
}
