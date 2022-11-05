import AnimatedSpriteConfig from './AnimatedSpriteConfig';
import AnimatedSprite from './AnimatedSprite';
import Sprite from './Sprite';
import SpriteSheet from './SpriteSheet';
import SpriteSheetConfig from './SpriteSheetConfig';

export default class SpriteLoader {
  constructor(cache, imageCache) {
    this._cache = cache;
    this._imageCache = imageCache;
    this._loadedSprites = [];
  }

  getSprite(key) {
    return this._loadedSprites[`sprite-${key}`];
  }

  async loadSpriteAsync(spriteId, spriteJSONUrl) {
    this._cache.registerAsset(spriteId, spriteJSONUrl);
    await this._cache.loadAsset(spriteId);
    const asset = await this._cache.getAssetAsync(spriteId);
    const spriteAssetJSON = JSON.parse(asset);

    var imageExistsInCache = this._imageCache.imageExists(spriteAssetJSON.Id);
    if (!imageExistsInCache) {
      this._imageCache.registerImage(
        spriteAssetJSON.Id,
        spriteAssetJSON.SpriteSheetUrl,
      );
      await this._imageCache.loadImageAsync(spriteAssetJSON.Id);
    }
    const image = await this._imageCache.getImageAsync(spriteAssetJSON.Id);
    const spriteSheet = new SpriteSheet(
      image,
      new SpriteSheetConfig(spriteAssetJSON.SpriteSheet),
    );
    const spriteAnimationConfiguration = new AnimatedSpriteConfig(
      spriteAssetJSON.animations[0].sprites,
    );
    if (spriteAssetJSON.Type === 'animatedSprite') {
      //// TODO: Load the sprite properly
      const sprite = new AnimatedSprite(
        spriteSheet,
        spriteAnimationConfiguration,
      );
      this._loadedSprites[`sprite-${spriteId}`] = sprite;
    } else {
      //// TODO: Fix for normal sprites
      const sprite = new Sprite(spriteSheet, spriteAssetJSON);
      this._loadedSprites[`sprite-${spriteId}`] = sprite;
    }
    return this._loadedSprites[`sprite-${spriteId}`];
  }
}
