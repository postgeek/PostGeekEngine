import { InvalidArguementErrorText } from '../ErrorTexts';

/**
* Defines the class for the MethodNotImplementedError
* Should be thrown in every method that needs to be overriden
*/
export default class InvalidArguementError extends Error {
  constructor(caller) {
    super(InvalidArguementErrorText);
    this.caller = caller;
  }
}
