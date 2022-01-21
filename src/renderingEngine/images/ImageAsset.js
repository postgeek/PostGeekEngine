export default class ImageAsset {
  constructor(id, imageUrl) {
    this.id = id;
    this.imageUrl = imageUrl;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  set imageUrl(value) {
    this._imageUrl = value;
  }
}
