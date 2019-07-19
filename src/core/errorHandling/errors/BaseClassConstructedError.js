import { BaseClassConstructedErrorText } from '../ErrorTexts';

/**
* Defines the class for the BaseClassConstructedError
* Should be thrown in every base class that shouldn't be constructed directly
*/
class BaseClassConstructedError extends Error {
  constructor(caller) {
    super(BaseClassConstructedErrorText);
    this.caller = caller;
  }
}
export default BaseClassConstructedError;
