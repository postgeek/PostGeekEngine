import MiddlewareMock from '../../mocks/MiddlewareMock';
import MiddlewareManager from '../../../src/core/managers/MiddlewareManager';
import ItemAlreadyExistsError from '../../../src/core/errorHandling/errors/ItemAlreadyExistsError';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

describe('add', () => {
  it('should register an object with a given key', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const key = 'jestKey';

    // Act
    middlewareManager.add(key, middleware);

    // Assert
    expect(middlewareManager.get(key)).not.toBe(null);
  });
  it('should throw an error if a middleware with the same key already exists', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const key = 'jestKey';

    // Act
    middlewareManager.add(key, middleware);

    // Assert
    expect(() => { middlewareManager.add(key, middleware); }).toThrow(ItemAlreadyExistsError);
  });
  it('should initialize the middleware when added', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const middlewareInitSpy = jest.spyOn(middleware, 'init');
    const key = 'jestKey';

    // Act
    middlewareManager.add(key, middleware);

    // Assert
    expect(middlewareInitSpy).toHaveBeenCalledTimes(1);
  });
});
describe('get', () => {
  it('should return a middleware with the given key', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const key = 'jestKey';

    // Act
    middlewareManager.add(key, middleware);

    // Assert
    expect(middlewareManager.get(key)).toBe(middleware);
  });
  it('should throw an error if the given key doesn\'t exist', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const key = 'jestKey';

    // Assert
    expect(() => { middlewareManager.get(key); }).toThrow(InvalidArguementError);
  });
});
describe('update', () => {
  it('should update all middleware registered in the manager', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const middleware2 = new MiddlewareMock();
    const middlewareUpdateSpy = jest.spyOn(middleware, 'update');
    const middleware2UpdateSpy = jest.spyOn(middleware2, 'update');
    const key = 'jestKey';
    const key2 = 'jestKey2';
    middlewareManager.add(key, middleware);
    middlewareManager.add(key2, middleware2);

    // Act
    middlewareManager.update();

    expect(middlewareUpdateSpy).toHaveBeenCalledTimes(1);
    expect(middleware2UpdateSpy).toHaveBeenCalledTimes(1);
  });
});
describe('draw', () => {
  it('should draw all the middleware registered in the manager', () => {
    // Arrange
    const middlewareManager = new MiddlewareManager();
    const middleware = new MiddlewareMock();
    const middleware2 = new MiddlewareMock();
    const middlewareDrawSpy = jest.spyOn(middleware, 'draw');
    const middleware2DrawSpy = jest.spyOn(middleware2, 'draw');
    const key = 'jestKey';
    const key2 = 'jestKey2';
    middlewareManager.add(key, middleware);
    middlewareManager.add(key2, middleware2);

    // Act
    middlewareManager.draw();

    expect(middlewareDrawSpy).toHaveBeenCalledTimes(1);
    expect(middleware2DrawSpy).toHaveBeenCalledTimes(1);
  });
});
