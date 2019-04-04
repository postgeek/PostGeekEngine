import InvalidArguementError from "../errorHandling/errors/InvalidArguementError";

/**
 * Loads assets using AJAX
 */
class AssetLoader {
  /**
   * Load a resource using AJAX
   * @param {string} url The url of the asset
   */
  load(url) {
    if (this.isValidUrl(url)) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
          if(xhr.status === 200) {
            resolve(xhr.response);
          }

          reject(xhr);
        }
        xhr.onerror = () => reject(xhr);
        xhr.send();
      });
    }

    // We want to throw an error here to avoid loading invalid urls
    // Ideally we don't want to stop the loading process, but meh for now
    throw new InvalidArguementError('url');
  }

  /**
   * Validate that the url is a relative or absolute paths.
   * @param {string} url A url or path
   */
  isValidUrl(url) {
    let regex = /^[^\/]+\/[^\/].*$|^\/[^\/].*$/;
    return regex.test(url);
  }
}

export default AssetLoader;