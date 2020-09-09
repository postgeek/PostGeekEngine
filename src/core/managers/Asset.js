const AssetType = Object.freeze({
  BLOB: Symbol('blob'),
  TEXT: Symbol('text'),
  UNKNOWN: Symbol('unknown'),
});

/**
 * @constant
 * The valid statuses for an asset.
 */
const AssetLoadingStatus = Object.freeze({
  NEW: Symbol('new'),
  LOADING: Symbol('loading'),
  LOADED: Symbol('loaded'),
  ERROR: Symbol('error'),
});

class Asset {
  constructor(key, path, assetType) {
    let type = AssetType.BLOB;
    if (assetType !== undefined) {
      type = assetType;
    }

    this.key = key;
    this.path = path;
    this.value = null;
    this.status = AssetLoadingStatus.NEW;
    this.type = type;
  }
}

export default Asset;
export {
  AssetLoadingStatus,
  AssetType,
};
