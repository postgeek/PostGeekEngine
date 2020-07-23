import MiddlewareBase from '../../../src/core/middleware/MiddlewareBase';
import MethodNotImplementedError from '../../../src/core/errorHandling/errors/MethodNotImplementedError';

describe('Middleware', () => {
  it('should throw an error when calling the init method if the class is not overridden', () => {
    // Arrange
    const middleWare = new MiddlewareBase();

    // Assert
    expect(() => { middleWare.init(); }).toThrow(MethodNotImplementedError);
  });
  it('should throw an error when calling the update method if the class is not overridden', () => {
    // Arrange
    const middleWare = new MiddlewareBase();

    // Assert
    expect(() => { middleWare.update(); }).toThrow(MethodNotImplementedError);
  });
  it('should throw an error when calling the draw method if the class is not overridden', () => {
    // Arrange
    const middleWare = new MiddlewareBase();

    // Assert
    expect(() => { middleWare.draw(); }).toThrow(MethodNotImplementedError);
  });
});

describe('constructor', () => {
  it('should create the middleware in an enabled state by default', () => {
    // Arrange
    const middleWare = new MiddlewareBase();

    // Assert
    expect(middleWare.enabled).toBe(true);
  });
});