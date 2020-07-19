import Asset, { AssetLoadingStatus } from './Asset';
import * as utils from './AssetUtils';

/**
 * @example
 * const cache = new AssetCache();
 * cache.registerAsset('key1', './assets/demo.json');
 * cache.loadAsset('key1').then(asset => {
 * const cachedAsset = cache.getAsset('key1');
 * console.log(cachedAsset);
 * console.log(asset);
 * });
 */
class AssetCache {
  /**
   * @constructor
   * Constructs a new AssetCache
   */
  constructor() {
    this.assetDictionary = [];
  }

  /**
   * @returns A dictionnary of the assets registered in the cache.
   */
  get assets() {
    return this.assetDictionary;
  }

  /**
   * Register the asset that can be loaded later.
   * @param {string} key The key used to load or retrive the asset later on.
   * @param {string} path The relative or absolute local path to the asset.
   */
  registerAsset(key, path) {
    const extension = utils.getExtension(path);
    const assetType = utils.getAssetTypeFromExtension(extension);
    this.assetDictionary[key] = new Asset(key, path, assetType);
  }

  /**
   * Load the asset into memory.
   * @param {string} key The key used when the asset you want to load was registered.
   * @returns {Asset} The registered asset information.
   */
  async loadAsset(key) {
    if (this.assetDictionary[key].status === AssetLoadingStatus.NEW) {
      this.assetDictionary[key].status = AssetLoadingStatus.LOADING;

      try {
        const value = await utils.downloadAsset(this.assetDictionary[key]);
        this.assetDictionary[key].value = value;
        this.assetDictionary[key].status = AssetLoadingStatus.LOADED;
      } catch (e) {
        this.assetDictionary[key].status = AssetLoadingStatus.ERROR;
        throw e;
      }
    }

    return this.assetDictionary[key];
  }

  /**
   * Get the value of the loaded asset.
   * @param {string} key The key used when the asset was registered.
   * @returns {object} The value of the loaded asset.
   */
  getAsset(key) {
    const asset = this.assetDictionary[key];
    if (asset.status === AssetLoadingStatus.LOADED) {
      return asset.value;
    }
    return undefined;
  }

  /**
   * Remove the asset from cache.
   * @param {string} key The key used when the asset was registered.
   */
  removeAsset(key) {
    delete this.assetDictionary[key];
  }

  /**
   * Remove all assets from cache.
   */
  destroy() {
    Object.keys(this.assetDictionary).forEach((key) => {
      this.removeAsset(key);
    });
  }
}

export default AssetCache;
