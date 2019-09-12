import Validator from './Validator';

class TextLengthValidator extends Validator {
  constructor(length) {
    super();
    this.length = length;
  }

  validate(input) {
    return input.length <= this.length;
  }
} export default TextLengthValidator;
