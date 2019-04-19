import AssetLoader from './AssetLoader';
import Asset, { AssetLoadingStatus, AssetType } from './Asset';

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
    this.assetLoader = new AssetLoader();
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
    const extension = this.getExtension(path);
    const assetType = this.getAssetTypeFromExtension(extension);
    this.assetDictionary[key] = new Asset(key, path, assetType);
  }


  /**
   * @todo Move to a utility class.
   * getExtension - Gets the files extension
   *
   * @param  {type} path the path to the file
   * @return {string}    the file's extension
   */
  getExtension(path) {
    const fileParts = path.split('.');
    return fileParts[fileParts.length - 1];
  }

  getAssetTypeFromExtension(extension) {
    if (this.isTextFileExtension(extension)) {
      return AssetType.TEXT;
    }
    if (this.isImageFileExtension(extension)) {
      return AssetType.BLOB;
    }
  }

  /** @todo Move to a utility class or to the asset loader */
  isTextFileExtension(extension) {
    return extension === 'json';
  }

  /** @todo Move to a utility class or to the asset loader */
  isImageFileExtension(extension) {
    return extension === 'png' || extension === 'jpeg';
  }

  /**
   * Load the asset into memory.
   * @param {string} key The key used when the asset you want to load was registered.
   * @returns {Promise} The registered asset information.
   */
  loadAsset(key) {
    return new Promise(async (resolve, reject) => {
      if (this.assetDictionary[key].status === AssetLoadingStatus.NEW) {
        this.assetDictionary[key].status = AssetLoadingStatus.LOADING;

        try {
          const value = await this.assetLoader.load(this.assetDictionary[key]);
          this.assetDictionary[key].value = value;
          this.assetDictionary[key].status = AssetLoadingStatus.LOADED;
        } catch (e) {
          this.assetDictionary[key].status = AssetLoadingStatus.ERROR;
          reject();
        }

        resolve(this.assetDictionary[key]);
      }
    });
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
