import { IndexSizeErrorText } from '../ErrorTexts';

/**
* Defines the class for the IndexSizeError
* Should be thrown whenever an invalid index size is attempted to be set
*/
class IndexSizeError extends Error {
  constructor(caller) {
    super(IndexSizeErrorText);
    this.caller = caller;
  }
}
export default IndexSizeError;
