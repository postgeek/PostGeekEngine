import { ItemAlreadyExistsErrorText } from '../ErrorTexts';

/**
* Defines the class for the MethodNotImplementedError
* Should be thrown in whenever you try to add an item that already exists to a collection
*/
class ItemAlreadyExistsError extends Error {
  constructor(caller) {
    super(ItemAlreadyExistsErrorText);
    this.caller = caller;
  }
}
export default ItemAlreadyExistsError;
