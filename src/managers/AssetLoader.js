import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';

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

  extractAssetType(asset) {
    return 'blob';
  }

  isValidUrl(url) {
    // We only want relative or absolute paths.
    // No external links or protocols.
    const regex = /^[^\/]+\/[^\/].*$|^\/[^\/].*$/;
    return regex.test(url);
  }
}

export default AssetLoader;
