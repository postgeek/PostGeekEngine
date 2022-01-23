import { LoadImageErrorText } from '../ErrorTexts';

/**
* Defines the class for the LoadImageError
* Should be thrown in the image loader when loading an image fails
*/
class LoadImageError extends Error {
  constructor(caller) {
    super(LoadImageErrorText);
    this.caller = caller;
  }
}
export default LoadImageError;
