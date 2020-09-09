import InvalidArguementError from '../errorHandling/errors/InvalidArguementError';

/**
 * Defines the EventBus class
 * Used for communicating between different components without coupling them together
 */
class EventBus {
  /**
   * constructor - Constructs a new EventBus
   */
  constructor() {
    this._registeredObservers = {};
  }

  /**
   * register - Registers a callback to a certain eventType
   *
   * @param  {Symbol} eventType   the eventType that the callback is registered to
   * @param  {function} callback  the callback function to execute when then event is emitted
   */
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
    callbacks.forEach((callback) => callback(event));
  }
} export default EventBus;
