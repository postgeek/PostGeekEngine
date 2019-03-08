import { InvalidArguementErrorText } from '../ErrorTexts';

/**
* Defines the class for the InvalidArguementError
* Should be thrown in every method where an argument can be invalid.
*/
class InvalidArguementError extends Error {
  constructor(caller) {
    super(InvalidArguementErrorText);
    this.caller = caller;
  }
}
export default InvalidArguementError;
