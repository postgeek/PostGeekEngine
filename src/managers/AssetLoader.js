import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';
import { AssetType } from './Asset';

class AssetLoader {
  load(asset) {
    const url = asset.path;
    const responseType = this.extractAssetType(asset);
    if (this.isValidUrl(url)) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
        xhr.responseType = responseType;
        xhr.onload = () => {
          if (xhr.status === 200) {
            resolve(xhr.response);
          }

          reject(xhr);
        };
        xhr.onerror = () => reject(xhr);
        xhr.send();
      });
    }

    // We want to throw an error here to avoid loading invalid urls
    // Ideally we don't want to stop the loading process, but meh for now
    throw new InvalidArguementError('url');
  }


  /**
   * @todo Add all asset types here.
   * extractAssetType - extract the asset type from the Asset to load the asset correctly
   *
   * @param  {type} asset The {@link Asset} to extract the type for
   * @return {type}       the type to load in the XMLHTTPRequest
   */
  extractAssetType(asset) {
    switch (asset.type) {
      case AssetType.BLOB:
        return 'blob';
      case AssetType.TEXT:
      default:
        return 'text';
    }
  }

  isValidUrl(url) {
    // We only want relative or absolute paths.
    // No external links or protocols.
    const regex = /^[^\/]+\/[^\/].*$|^\/[^\/].*$/;
    return regex.test(url);
  }
}

export default AssetLoader;
