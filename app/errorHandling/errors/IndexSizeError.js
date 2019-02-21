import { IndexSizeErrorText } from '../ErrorTexts';

/**
* Defines the class for the IndexSizeError
* Should be thrown whenver an invalid index size is attempted to be set
*/
export default class IndexSizeError extends Error {
  constructor() {
    super(IndexSizeErrorText);
  }
}
