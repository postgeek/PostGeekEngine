import { UndefinedErrorText } from '../ErrorTexts';

/**
* Defines the class for the MethodNotImplementedError
* Should be thrown in every method that needs to be overriden
*/
class UndefinedError extends Error {
  constructor(caller) {
    super(UndefinedErrorText);
    this.caller = caller;
  }
}
export default UndefinedError;
