/* eslint no-unused-vars: 0 */

import MethodNotImplementedError from './errorHandling/errors/MethodNotImplementedError';

class Component {
  constructor(containerObject) {
    this.containerObject = containerObject;
    this.containerObject.addComponent(this);
  }

  receive(message) {
    throw new MethodNotImplementedError(this);
  }
} export default Component;
