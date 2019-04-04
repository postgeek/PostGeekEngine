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
    this.key = key;
    this.path = path;
    this.value = null;
    this.status = AssetLoadingStatus.NEW
  }
}

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

export default Asset;
export {
  AssetLoadingStatus
}