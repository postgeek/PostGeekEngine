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
    return new Promise((resolve, reject) => {
      if (this.assetList[key].status === AssetLoadingStatus.NEW) {
        this.assetList[key].status = AssetLoadingStatus.LOADING;
        this.assetLoader.load(this.assetList[key].path).then(value => {
          this.assetList[key].value = value;
          this.assetList[key].status = AssetLoadingStatus.LOADED;
          resolve(this.assetList[key]);
        })
        .catch(() => {
          this.assetList[key].status = AssetLoadingStatus.ERROR;
          reject();
        });
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
    this.assetList.forEach(key => {
      this.remove(key);
    })
  }
}

export default AssetCache;