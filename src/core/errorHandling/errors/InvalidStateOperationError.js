import { InvalidStateOperationErrorText } from '../ErrorTexts';

/**
* Defines the class for the InvalidOperationError
* Should be thrown in any method that is called in an invalid state.
*/
export default class InvalidStateOperationError extends Error {
  constructor(caller) {
    super(InvalidStateOperationErrorText);
    this.caller = caller;
  }
}
