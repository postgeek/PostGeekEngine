import { AssetLoadingStatus } from '../../core/managers/Asset';

export default class ImageAsset {
  constructor(key, imageUrl) {
    this.key = key;
    this.imageUrl = imageUrl;
    this.image = null;
    this.status = AssetLoadingStatus.NEW;
  }
}
