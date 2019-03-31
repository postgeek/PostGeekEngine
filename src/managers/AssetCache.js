import AssetLoader from "./AssetLoader";
import Asset, { AssetLoadingStatus } from "./Asset";

class AssetCache {
  constructor() {
    this.assetList = [];
    this.assetLoader = new AssetLoader();
  }

  get assets() {
    return this.assetList;
  }

  registerAsset(key, path) {
    this.assetList[key] = new Asset(key, path);
  }

  loadAsset(key) {
    return new Promise(async (resolve, reject) => {
      if (this.assetList[key].status === AssetLoadingStatus.NEW) {
        this.assetList[key].status = AssetLoadingStatus.LOADING;

        try {
          let value = await this.assetLoader.load(this.assetList[key].path);
          this.assetList[key].value = value;
          this.assetList[key].status = AssetLoadingStatus.LOADED;
        } catch (e) {
          this.assetList[key].status = AssetLoadingStatus.ERROR;
          reject();
        }

        resolve(this.assetList[key]);
      }
    });
  }

  getAsset(key) {
    const asset = this.assetList[key];
    if (asset.status === AssetLoadingStatus.LOADED) {
      return asset.value;
    }
  }

  removeAsset(key) {
    delete this.assetList[key];
  }

  destroy() {
    Object.keys(this.assetList).forEach(key => {
      this.removeAsset(key);
    })
  }
}

export default AssetCache;