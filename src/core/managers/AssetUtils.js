import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';
import { AssetType } from './Asset';

/**
 * getExtension - Gets the files extension
 *
 * @param  {type} path the path to the file
 * @return {string}    the file's extension
 */
function getExtension(path) {
  const fileParts = path.split('.');
  return fileParts[fileParts.length - 1];
}

/**
 * Returns true if the extention is json.
 * @param {string} extension the extention, excluding the '.' of the filename.
 * @return {boolean} is text file extention
 */
function isTextFileExtension(extension) {
  return extension === 'json';
}

/**
 * Returns true if the extention is png or jpeg.
 * @param {string} extension the extention, excluding the '.' of the filename.
 * @return {boolean} is image file extention
 */
function isImageFileExtension(extension) {
  return extension === 'png' || extension === 'jpeg';
}

/**
 * Get the AssetType from the extention of the filename.
 * @param {string} extension the extention, excluding the '.' of the filename.
 * @return {AssetType} the file type.
 */
function getAssetTypeFromExtension(extension) {
  if (isTextFileExtension(extension)) {
    return AssetType.TEXT;
  }
  if (isImageFileExtension(extension)) {
    return AssetType.BLOB;
  }

  return AssetType.UNKNOWN;
}

/**
 * @todo Add all asset types here.
 * extractAssetType - extract the asset type from the Asset to load the asset correctly
 *
 * @param  {type} asset The {@link Asset} to extract the type for
 * @return {type}       the type to load in the XMLHTTPRequest
 */
function extractAssetType(asset) {
  switch (asset.type) {
    case AssetType.BLOB:
      return 'blob';
    case AssetType.TEXT:
    default:
      return 'text';
  }
}

/**
 * Validate that a url is not external.
 * @param {string} url A URL to validate
 */
function isValidUrl(url) {
  // We only want relative or absolute paths.
  // No external links or protocols.
  const regex = /^[^/]+\/[^/].*$|^\/[^/].*$/;
  return regex.test(url);
}

/**
 * Make a web request to download the asset.
 * @param {Asset} asset The asset to download
 * @returns {Promise} The response from the AJAX request.
 */
function downloadAsset(asset) {
  const url = asset.path;
  const responseType = extractAssetType(asset);
  if (isValidUrl(url)) {
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

export {
  getExtension,
  getAssetTypeFromExtension,
  isTextFileExtension,
  isImageFileExtension,
  extractAssetType,
  isValidUrl,
  downloadAsset,
};
