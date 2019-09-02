import Transform from '../../../src/renderingEngine/context/Transform';
import ServiceLocator from '../../../src/core/ServiceLocator';
import ContextMock from '../../mocks/ContextMock';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('transform', () => {
  it('should save the previous context when begining a transformation', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextSaveSpy = jest.spyOn(context, 'save');

    // Act
    transform.begin();

    // Asset
    expect(contextSaveSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the rotate method of the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextRotateSpy = jest.spyOn(context, 'rotate');
    const degree = 30;

    // Act
    transform.rotate(degree);

    // Asset
    expect(contextRotateSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the scale method of the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextScaleSpy = jest.spyOn(context, 'scale');
    const x = 2;
    const y = 3;

    // Act
    transform.scale(x, y);

    // Asset
    expect(contextScaleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the translate method of the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextTranslateSpy = jest.spyOn(context, 'translate');
    const x = 2;
    const y = 3;

    // Act
    transform.translate(x, y);

    // Asset
    expect(contextTranslateSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the skew method of the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextTransformSpy = jest.spyOn(context, 'transform');
    const x = 2;
    const y = 3;

    // Act
    transform.skew(x, y);

    // Asset
    expect(contextTransformSpy).toHaveBeenCalledTimes(1);
  });
  it('should call the reset transform method of the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextResetTransformSpy = jest.spyOn(context, 'resetTransform');
    const x = 2;
    const y = 3;

    // Act
    transform.reset(x, y);

    // Asset
    expect(contextResetTransformSpy).toHaveBeenCalledTimes(1);
  });
  it('should restore the context', () => {
    // Arrange
    const transform = new Transform();
    const context = ServiceLocator.instance.locate('context');
    const contextRestoreSpy = jest.spyOn(context, 'restore');
    const x = 2;
    const y = 3;

    // Act
    transform.end(x, y);

    // Asset
    expect(contextRestoreSpy).toHaveBeenCalledTimes(1);
  });
});
