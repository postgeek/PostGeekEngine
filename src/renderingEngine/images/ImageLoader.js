export default class ImageLoader {
  constructor(cache) {
    this.cache = cache;
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
    return this.addImageAsync(imageId, this.cache.getAsset(imageId));
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
