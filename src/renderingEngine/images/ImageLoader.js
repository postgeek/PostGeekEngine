export default class ImageLoader {

    constructor(cache) {
      this.cache = cache;
    }

    addImageAsync(imageId, assetUrl) {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = window.URL.createObjectURL(assetUrl);
            image.onload = () => {
              resolve({id: imageId, image: image});
            };
        });
    }

    async loadImage(imageId, imageUrl) {
        this.cache.registerAsset(imageId, imageUrl);
        await this.cache.loadAsset(imageId);
        return this.addImageAsync(imageId, this.cache.getAsset(imageId));
    }

    async loadImages(imageAssets) {
      var promises = [];
      (imageAssets.forEach(async (imageAsset) => {
        var imageId = imageAsset.id;
        var imageUrl = imageAsset.imageUrl;
        promises.push(this.loadImage(imageId, imageUrl));
      }));
      return Promise.all(promises);
    }
}