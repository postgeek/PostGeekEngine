import { UnhandledHtmlEventErrorText } from '../ErrorTexts';

/**
* Defines the class for the UnhandledEventError
* TODO: rephrase this Should be thrown when an html event is not handled by the system.
*/
class UnhandledHtmlEventError extends Error {
  constructor(caller) {
    super(UnhandledHtmlEventErrorText);
    this.caller = caller;
  }
}
export default UnhandledHtmlEventError;
