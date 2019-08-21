import MiddlewareManager from '../../../src/core/managers/MiddlewareManager';
import ItemAlreadyExistsError from '../../../src/core/errorHandling/errors/ItemAlreadyExistsError';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

describe('add', () => {
  it.skip('should register an object with a given key', () => {
    // Assert
    expect().not.toBe(null);
  });
  it.skip('should throw an error if a middleware with the same key already exists', () => {
    // Assert
    expect(() => {}).toThrow(ItemAlreadyExistsError);
  });
  it.skip('should initialize the middleware when added', () => {
    expect().toHaveBeenCalledTimes(1);
  });
});
describe('get', () => {
  it.skip('should return a middleware with the given key', () => {
    // Assert
    expect().toBe();
  });
  it.skip('should throw an error if the given key doesn\'t exist', () => {
    // Assert
    expect(() => { }).toThrow(InvalidArguementError);
  });
});
describe('update', () => {
  it.skip('should update all middleware registered in the manager', () => {
    expect().toHaveBeenCalledTimes(2);
  });
});
describe('draw', () => {
  it.skip('should draw all the middleware registered in the manager', () => {
    expect().toHaveBeenCalledTimes(2);
  });
});
