import { AssetLoadingStatus } from '../../../core/managers/Asset';
import ImageAsset from '../ImageAsset';
import ServiceLocator from '../../../core/ServiceLocator';

export default class ImageCache {
  constructor(assetCache) {
    this._assetCache = assetCache;
    this.imageDictionary = [];
  }

  get images() {
    return this.imageDictionary;
  }

  registerImage(key, imageUrl) {
    this._assetCache.registerAsset(key, imageUrl);
    if (!this.imageExists(key)) {
      this.imageDictionary[key] = new ImageAsset(key, imageUrl);
    } else {
      const logger = ServiceLocator.instance.locate('logger');
      logger.warn(`Key: ${key} is already registered`);
    }
  }

  imageExists(key) {
    return Object.prototype.hasOwnProperty.call(this.imageDictionary, key);
  }

  /**
   * Load the image into memory.
   * @param {string} key The key used when the image you want to load was registered.
   * @returns {Asset} The registered image information.
   */
  async loadImageAsync(key) {
    const imageCacheItem = this.imageDictionary[key];

    if (imageCacheItem.status === AssetLoadingStatus.NEW) {
      imageCacheItem.status = AssetLoadingStatus.LOADING;

      try {
        await this._assetCache.loadAsset(key);
        const assetCacheItem = await this._assetCache.getAssetAsync(key);
        const loadedImage = await this.downloadImageAsync(assetCacheItem);
        imageCacheItem.image = loadedImage;
        imageCacheItem.status = AssetLoadingStatus.LOADED;
      } catch (e) {
        imageCacheItem.status = AssetLoadingStatus.ERROR;
        throw e;
      }
    }
    return imageCacheItem;
  }

  async downloadImageAsync(assetCacheItem) {
    return await new Promise((resolve) => {
      const image = new Image();
      image.src = window.URL.createObjectURL(assetCacheItem);
      image.onload = () => {
        resolve(image);
      };
    });
  }

  /**
   * Get the value of the loaded image.
   * @param {string} key The key used when the image was registered.
   * @returns {object} The value of the loaded image.
   */
  getImage(key) {
    const image = this.imageDictionary[key];
    if (image.status === AssetLoadingStatus.LOADED) {
      return image.image;
    }
    return undefined;
  }

  /**
   * Get the value of the loaded image.
   * @param {string} key The key used when the image was registered.
   * @returns {object} The value of the loaded image.
   */
  async getImageAsync(key) {
    const image = this.imageDictionary[key];
    return new Promise((resolve) => {
      (function waitForImageAssetLoaded() {
        if (image.status === AssetLoadingStatus.LOADED) {
          resolve(image.image);
        }
        setTimeout(waitForImageAssetLoaded, 30);
      }());
    });
  }

  /**
   * Remove the image from cache.
   * @param {string} key The key used when the image was registered.
   */
  removeImage(key) {
    const imageCacheItem = this.imageDictionary[key];
    window.URL.revokeObjectURL(imageCacheItem.image.src);
    delete this.imageDictionary[key];
  }

  /**
   * Remove all images from cache.
   */
  destroy() {
    Object.keys(this.imageDictionary).forEach((key) => {
      this.removeImage(key);
    });
  }
}
