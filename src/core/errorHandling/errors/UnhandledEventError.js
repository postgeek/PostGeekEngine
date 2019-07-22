import { UnhandledEventErrorText } from '../ErrorTexts';

/**
* Defines the class for the UnhandledEventError
* TODO: rephrase this Should be thrown when an html event is not handled by the system.
*/
class UnhandledEventError extends Error {
  constructor(caller) {
    super(UnhandledEventErrorText);
    this.caller = caller;
  }
}
export default UnhandledEventError;
