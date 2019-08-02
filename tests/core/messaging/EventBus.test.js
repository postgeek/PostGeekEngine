import ServiceLocator from '../../../src/core/ServiceLocator';
import EventBus from '../../../src/core/messaging/EventBus';

class EventOne {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get eventType() {
    return EventTypes.EVENT_ONE;
  }
}

class EventTwo {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get eventType() {
    return EventTypes.EVENT_TWO;
  }
}

class EventHandlerOne {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.registerEvents();
  }

  registerEvents() {
    this.eventBus = ServiceLocator.instance.locate('eventBus');
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
    this.eventBus = ServiceLocator.instance.locate('eventBus');
    this.eventBus.register(EventTypes.EVENT_ONE, data => this.handleEventOne(data));
  }

  handleEventOne(e) {
    this.x = e.x;
    this.y = e.y;
  }
}

const eventBus = new EventBus();

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('eventBus', eventBus);
});

const EventTypes = Object.freeze({
  EVENT_ONE: Symbol('event_one'),
  EVENT_TWO: Symbol('event_two'),
  UNHANDLED_EVENT: Symbol('unhandled_event'),
});

describe('register', () => {
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
