class Asset {
  constructor(key, path) {
    this.key = key;
    this.path = path;
    this.value = null;
    this.status = AssetLoadingStatus.NEW;
  }
}

const AssetType = Object.freeze({
  NEW: Symbol('new'),
  LOADING: Symbol('loading'),
  LOADED: Symbol('loaded'),
  ERROR: Symbol('error'),
});

const AssetLoadingStatus = Object.freeze({
  NEW: Symbol('new'),
  LOADING: Symbol('loading'),
  LOADED: Symbol('loaded'),
  ERROR: Symbol('error'),
});

export default Asset;
export {
  AssetLoadingStatus,
};
