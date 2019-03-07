import { InvalidOperationErrorText } from '../ErrorTexts';

/**
* Defines the class for the InvalidOperationError
* Should be thrown in any method that is called in an invalid state.
*/
export default class InvalidOperationError extends Error {
  constructor(caller) {
    super(InvalidOperationErrorText);
    this.caller = caller;
  }
}
