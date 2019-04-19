<<<<<<< HEAD
const AssetType = Object.freeze({
  BLOB: Symbol('blob'),
  TEXT: Symbol('text'),
});

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

=======
/**
 * An asset object for the Asset Cache.
 */
class Asset {
  /**
   * @constructor
   * @param {string} key The key used to reference the key
   * @param {string} path The path to the asset
   */
  constructor(key, path) {
>>>>>>> develop
    this.key = key;
    this.path = path;
    this.value = null;
    this.status = AssetLoadingStatus.NEW;
    this.type = type;
  }
}

<<<<<<< HEAD
=======
/**
 * @constant
 * The valid statuses for an asset.
 */
const AssetLoadingStatus = Object.freeze({
  NEW:   Symbol("new"),
  LOADING:  Symbol("loading"),
  LOADED: Symbol("loaded"),
  ERROR: Symbol("error")
});

>>>>>>> develop
export default Asset;
export {
  AssetLoadingStatus,
  AssetType,
};
