import Validator from './Validator';

class NumberRangeValidator extends Validator {
  constructor(min, max) {
    super();
    this.min = min;
    this.max = max;
  }

  validate(input) {
    return !Number.isNaN(input) && input >= this.min && input <= this.max;
  }
} export default NumberRangeValidator;
