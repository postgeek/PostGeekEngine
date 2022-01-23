import GraphicImage from "./GraphicImage";

export default class ImageLoader {
  constructor(cache) {
    this.cache = cache;
    this._loadedImages = {};
  }

  getImage(key) {
    return this._loadedImages[`image-${key}`];
  }

  static addImageAsync(imageId, assetUrl) {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = window.URL.createObjectURL(assetUrl);
      image.onload = () => {
        resolve({ id: imageId, image });
      };
    });
  }

  async loadImage(imageId, imageUrl) {
    this.cache.registerAsset(imageId, imageUrl);
    await this.cache.loadAsset(imageId);
    return new Promise((resolve) => {
      ImageLoader.addImageAsync(imageId, this.cache.getAsset(imageId)).then((image) => {
        var loadedimage =  new GraphicImage(image.image);
        loadedimage.isLoaded = true;
        this._loadedImages[`image-${imageId}`] = loadedimage;
        resolve(loadedimage);
      });
    });
  }

  async loadImages(imageAssets) {
    const promises = [];
    (imageAssets.forEach(async (imageAsset) => {
      const imageId = imageAsset.id;
      const { imageUrl } = imageAsset;
      promises.push(this.loadImage(imageId, imageUrl));
    }));
    return Promise.all(promises);
  }
}