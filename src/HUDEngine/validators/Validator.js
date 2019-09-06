import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';

class Validator {
  validate() {
    throw new MethodNotImplementedError(this);
  }
} export default Validator;
