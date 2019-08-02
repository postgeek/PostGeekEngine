import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';

class EventBus {
  constructor() {
    this._registeredObservers = {};
  }

  register(eventType, callback) {
    // TODO write a test where two objects have the same callback signature
    if (!(eventType in this._registeredObservers)) {
      this._registeredObservers[eventType] = [];
    }
    // Check if the callback aleady exists
    this._registeredObservers[eventType].push(callback);
  }

  emit(eventType, event) {
    if (eventType === undefined) {
      throw new InvalidArguementError(this);
    }

    const callbacks = this._registeredObservers[eventType];
    callbacks.forEach(callback => callback(event));
  }
} export default EventBus;
