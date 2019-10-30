import Gradient from '../../../src/renderingEngine/colors/gradient/Gradient';
import LinearGradient from '../../../src/renderingEngine/colors/gradient/LinearGradient';
import RadialGradient from '../../../src/renderingEngine/colors/gradient/RadialGradient';
import ServiceLocator from '../../../src/core/ServiceLocator';
import Vec2D from '../../../src/core/Vec2D';
import BaseClassConstructedError from '../../../src/core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../../src/core/errorHandling/errors/MethodNotImplementedError';

/* import mocks */
import ContextMock from '../../mocks/ContextMock';
import GradientMock from '../../mocks/GradientMock';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('Gradient', () => {
  it('should throw an error when trying to construct the gradient class', () => {
    // Assert
    expect(() => { new Gradient(); }).toThrow(BaseClassConstructedError);
  });
  it('should throw an error if the buildGradient method is not overriden', () => {
    // Act
    const gradientMock = new GradientMock();

    // Assert
    expect(() => { gradientMock.buildGradient(); }).toThrow(MethodNotImplementedError);
  });
});

describe('LinearGradient', () => {
  it('should create a linear gradient with the provided properties', () => {
    // Arrange
    const startPoint = new Vec2D(10, 30);
    const endPoint = new Vec2D(40, 50);

    // Act
    const linearGradient = new LinearGradient(startPoint, endPoint);

    // Assert
    expect(linearGradient).toBeDefined();
    expect(linearGradient.startPoint.X).toBe(startPoint.X);
    expect(linearGradient.startPoint.Y).toBe(startPoint.Y);
    expect(linearGradient.endPoint.X).toBe(endPoint.X);
    expect(linearGradient.endPoint.Y).toBe(endPoint.Y);
  });
  it('should ensure that the proper context methods are called', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const contextCreateLinearGradientSpy = jest.spyOn(context, 'createLinearGradient');
    const startPoint = new Vec2D(10, 30);
    const endPoint = new Vec2D(40, 50);
    const linearGradient = new LinearGradient(startPoint, endPoint);

    // Act
    linearGradient.buildGradient();

    // Assert
    expect(contextCreateLinearGradientSpy).toHaveBeenCalledTimes(1);
  });
  it('should ensure that the color stops are added to the created context gradient', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const gradient = context.createGradientMock();
    const contextAddColorStopSpy = jest.spyOn(gradient, 'addColorStop');
    const startPoint = new Vec2D(10, 30);
    const endPoint = new Vec2D(40, 50);
    const linearGradient = new LinearGradient(startPoint, endPoint);
    linearGradient.addColorStop(0.5, 'red');
    linearGradient.addColorStop(0.7, 'blue');
    linearGradient.addColorStop(0.86, 'green');

    // Act
    linearGradient.buildGradient();

    // Assert
    expect(contextAddColorStopSpy).toHaveBeenCalledTimes(3);
  });
});

describe('RadialGradient', () => {
  it('should create a radial gradient with the provided properties', () => {
    // Arrange
    const startPoint = new Vec2D(10, 30);
    const startRadius = 4;
    const endPoint = new Vec2D(40, 50);
    const endRadius = 6;

    // Act
    const radialGradient = new RadialGradient(startPoint, startRadius, endPoint, endRadius);

    // Assert
    expect(radialGradient).toBeDefined();
    expect(radialGradient.startCirclePoint.X).toBe(startPoint.X);
    expect(radialGradient.startCirclePoint.Y).toBe(startPoint.Y);
    expect(radialGradient.startCircleRadius).toBe(startRadius);
    expect(radialGradient.endCirclePoint.X).toBe(endPoint.X);
    expect(radialGradient.endCirclePoint.Y).toBe(endPoint.Y);
    expect(radialGradient.endCircleRadius).toBe(endRadius);
  });
  it('should build the radial gradient with the provided properties', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const contextCreateRadialGradientSpy = jest.spyOn(context, 'createRadialGradient');
    const startPoint = new Vec2D(10, 30);
    const startRadius = 4;
    const endPoint = new Vec2D(40, 50);
    const endRadius = 6;
    const radialGradient = new RadialGradient(startPoint, startRadius, endPoint, endRadius);

    // Act
    const gradient = radialGradient.buildGradient();

    // Assert
    expect(contextCreateRadialGradientSpy).toHaveBeenCalledTimes(1);
  });
  it('should ensure that the color stops are added to the created context gradient', () => {
    // Arrange
    const context = ServiceLocator.instance.locate('context');
    const gradient = context.createGradientMock();
    const contextAddColorStopSpy = jest.spyOn(gradient, 'addColorStop');
    const startPoint = new Vec2D(10, 30);
    const startRadius = 4;
    const endPoint = new Vec2D(40, 50);
    const endRadius = 6;
    const radialGradient = new RadialGradient(startPoint, startRadius, endPoint, endRadius);
    radialGradient.addColorStop(0.5, 'red');
    radialGradient.addColorStop(0.7, 'blue');
    radialGradient.addColorStop(0.86, 'green');

    // Act
    radialGradient.buildGradient();

    // Assert
    expect(contextAddColorStopSpy).toHaveBeenCalledTimes(3);
  });
});
