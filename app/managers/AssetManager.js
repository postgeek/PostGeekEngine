// Possible transform this into a singleton
class AssetManager {
  /**
  * Constructs a new AssetManager object.
  */
  constructor() {
    this.assets = [];
  }

  // TODO: Check the file extension to load based of
  // The file that is sent to the function
  /**
  * Loads an asset file into memory.
  *
  * @param {string} key the assets unique identifier.
  * @param {file} assetFile the asset file to load.
  */
  LoadAsset(key, assetFile) {
    this.isLoaded = false;
    const image = new Image();
    image.onload = function load() {
      this.isLoaded = true;
    };
    image.src = assetFile;
    this.assets[key] = image;
  }

  /**
  * Gets the asset corresponding to the provided key,
  *
  * @param {string} key the key to load the asset.
  * @returns {object} the asset associated to the current key.
  */
  GetAsset(key) {
    return this.assets[key];
  }
}
export default AssetManager;
