import AssetLoader from './AssetLoader';
import Asset, { AssetLoadingStatus } from './Asset';

/**
const cache = new AssetCache();
cache.registerAsset('key1', './assets/demo.json');
cache.loadAsset('key1').then(asset => {
const cachedAsset = cache.getAsset('key1');
console.log(cachedAsset);
console.log(asset);
});
*/
class AssetCache {
  constructor() {
    this.assetDictionary = [];
    this.assetLoader = new AssetLoader();
  }

  get assets() {
    return this.assetDictionary;
  }

  registerAsset(key, path) {
    this.assetDictionary[key] = new Asset(key, path);
  }

  loadAsset(key) {
    return new Promise(async (resolve, reject) => {
      if (this.assetDictionary[key].status === AssetLoadingStatus.NEW) {
        this.assetDictionary[key].status = AssetLoadingStatus.LOADING;

        try {
          const value = await this.assetLoader.load(this.assetDictionary[key].path);
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

  getAsset(key) {
    const asset = this.assetDictionary[key];
    if (asset.status === AssetLoadingStatus.LOADED) {
      return asset.value;
    }
    return undefined;
  }

  removeAsset(key) {
    delete this.assetDictionary[key];
  }

  destroy() {
    Object.keys(this.assetDictionary).forEach((key) => {
      this.removeAsset(key);
    });
  }
}

export default AssetCache;
