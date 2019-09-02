import IMiddleware from '../../../src/core/middleware/IMiddleware';
import MethodNotImplementedError from '../../../src/core/errorHandling/errors/MethodNotImplementedError';

describe('Middleware', () => {
  it('should throw an error when calling the init method if the class is not overridden', () => {
    // Arrange
    const middleWare = new IMiddleware();

    // Assert
    expect(() => { middleWare.init(); }).toThrow(MethodNotImplementedError);
  });
  it('should throw an error when calling the update method if the class is not overridden', () => {
    // Arrange
    const middleWare = new IMiddleware();

    // Assert
    expect(() => { middleWare.update(); }).toThrow(MethodNotImplementedError);
  });
  it('should throw an error when calling the draw method if the class is not overridden', () => {
    // Arrange
    const middleWare = new IMiddleware();

    // Assert
    expect(() => { middleWare.draw(); }).toThrow(MethodNotImplementedError);
  });
});
