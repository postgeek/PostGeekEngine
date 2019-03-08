// Possible transform this into a singleton
export default class AssetManager {
  constructor() {
    this.assets = [];
  }

  // TODO: Check the file extension to load based of
  // The file that is sent to the function
  LoadAsset(key, assetFile) {
    this.isLoaded = false;
    const image = new Image();
    image.onload = function load() {
      this.isLoaded = true;
    };
    image.src = assetFile;
    this.assets[key] = image;
  }

  GetAsset(key) {
    return this.assets[key];
  }
}
