import GraphicImage from './GraphicImage';

export default class ImageLoader {
  constructor(cache) {
    this.cache = cache;
    this._loadedImages = {};
  }

  getImage(key) {
    return this._loadedImages[`image-${key}`];
  }

  static addImage(assetUrl) {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = window.URL.createObjectURL(assetUrl);
      image.onload = () => {
        resolve(image);
      };
    });
  }

  async loadImageAsync(imageId, imageUrl) {
    this.cache.registerAsset(imageId, imageUrl);
    await this.cache.loadAsset(imageId);
    var asset = await this.cache.getAsset(imageId);
    var image = await ImageLoader.addImage(asset);
    const loadedimage = new GraphicImage(image);
    loadedimage.isLoaded = true;
    this._loadedImages[`image-${imageId}`] = loadedimage;
    return loadedimage;
  }

  async loadImagesAsync(imageAssets) {
    const promises = [];
    (imageAssets.forEach(async (imageAsset) => {
      const imageId = imageAsset.id;
      const { imageUrl } = imageAsset;
      promises.push(this.loadImageAsync(imageId, imageUrl));
    }));
    return Promise.all(promises);
  }
}
