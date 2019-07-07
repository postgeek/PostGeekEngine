import MethodNotImplementedError from '../errorHandling/errors/MethodNotImplementedError';

class IMiddleware {
  init() {
    throw new MethodNotImplementedError(this);
  }

  update() {
    throw new MethodNotImplementedError(this);
  }

  draw() {
    throw new MethodNotImplementedError(this);
  }
} export default IMiddleware;
