import { BaseClassConstructedErrorText } from '../ErrorTexts';

/**
* Defines the class for the BaseClassConstructedError
* Should be thrown in every base class that shouldn't be constructed directly
*/
export default class BaseClassConstructedError extends Error {
  constructor() {
    super(BaseClassConstructedErrorText);
  }
}
