import ServiceLocator from '../../src/core/ServiceLocator';
import InvalidArguementError from '../../src/core/errorHandling/errors/InvalidArguementError';

beforeEach(() => {
  ServiceLocator.instance.clear();
});

describe('register', () => {
  it('should register an object with a given key', () => {
    // Arange
    const key = 'someKey';
    const service = new Date(1995, 11, 17);

    // Act
    ServiceLocator.instance.register(key, service);

    // Assert
    expect(ServiceLocator.instance.locate(key)).not.toBe(null);
  });
});

describe('locate', () => {
  it('should return an object with a given key', () => {
    // Arange
    const key = 'someKey';
    const service = new Date(1995, 11, 17);
    ServiceLocator.instance.register(key, service);

    // Act
    const returnedService = ServiceLocator.instance.locate(key);

    // Asset
    expect(service.value).toBe(returnedService.value);
  });
  it('should throw an error if key is not found', () => {
    // Arange
    const key = 'someKey';

    // Assert
    expect(() => { ServiceLocator.instance.locate(key); }).toThrow(InvalidArguementError);
  });
});

describe('containsKey', () => {
  it('should return true when key exists', () => {
    // Arrange
    const key = "someKey";
    const service = "someService";
    const expectedResult = true;
    ServiceLocator.instance.register(key, service);

    // Act
    var result = ServiceLocator.instance.containsKey(key);

    // Assert
    expect(result).toBe(expectedResult);
  });
  it('should return false when key does not exist', () => {
    // Arrange
    const key = "someKey";
    const expectedResult = false;

    // Act
    var result = ServiceLocator.instance.containsKey(key);

    // Assert
    expect(result).toBe(expectedResult);
  });
});

describe('clear', () => {
  it('should remove all registered services', () => {
    // Arange
    const key = 'someKey';
    const service = new Date(1995, 11, 17);
    ServiceLocator.instance.register(key, service);

    // Act
    ServiceLocator.instance.clear();

    // Assert
    expect(() => { ServiceLocator.instance.locate(key); }).toThrow(InvalidArguementError);
  });
});
