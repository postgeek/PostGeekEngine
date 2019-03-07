import { MethodNotImplementedErrorText } from '../ErrorTexts';

/**
* Defines the class for the MethodNotImplementedError
* Should be thrown in every method that needs to be overriden
*/
class MethodNotImplementedError extends Error {
  constructor(caller) {
    super(MethodNotImplementedErrorText);
    this.caller = caller;
  }
}
export default MethodNotImplementedError;
