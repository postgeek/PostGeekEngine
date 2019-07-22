import { UnhandledEventErrorText } from '../ErrorTexts';

/**
* Defines the class for the UnhandledEventError
* TODO: rephrase this Should be thrown in every method that needs to be overriden
*/
class UnhandledEventError extends Error {
  constructor(caller) {
    super(UnhandledEventErrorText);
    this.caller = caller;
  }
}
export default UnhandledEventError;
