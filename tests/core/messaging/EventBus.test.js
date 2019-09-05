import EventBus from '../../../src/core/messaging/EventBus';

import ServiceLocator from '../../../src/core/ServiceLocator';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

const eventBus = new EventBus();

const EventTypes = Object.freeze({
  EVENT_ONE: Symbol('event_one'),
  EVENT_TWO: Symbol('event_two'),
  UNHANDLED_EVENT: Symbol('unhandled_event'),
});

class EventOne {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class EventTwo {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class EventHandlerOne {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.registerEvents();
  }

  registerEvents() {
    this.eventBus = eventBus;
    this.eventBus.register(EventTypes.EVENT_ONE, data => this.handleEventOne(data));
  }

  handleEventOne(e) {
    this.x = e.x;
    this.y = e.y;
  }

  emitEventOne() {
    this.eventBus.emit(EventTypes.EVENT_ONE, new EventOne(5, 10));
  }
}

class EventHandlerTwo {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.registerEvents();
  }

  registerEvents() {
    this.eventBus = eventBus;
    this.eventBus.register(EventTypes.EVENT_ONE, data => this.handleEventOne(data));
  }

  handleEventOne(e) {
    this.x = e.x;
    this.y = e.y;
  }
}

describe('register', () => {
  it('should throw an error if an event is emitted without an event type', () => {
    // Assert
    expect(() => { eventBus.emit(undefined, { data: 'empty data' }); }).toThrow(InvalidArguementError);
  });
  it('should handle the event in both classes', () => {
    // Arrange
    const eventHandlerOne = new EventHandlerOne();
    const eventHandlerTwo = new EventHandlerTwo();

    // Act
    eventHandlerOne.emitEventOne();

    // Assert
    expect(eventHandlerOne.x).toBe(5);
    expect(eventHandlerOne.y).toBe(10);
    expect(eventHandlerTwo.x).toBe(5);
    expect(eventHandlerTwo.y).toBe(10);
  });
});
