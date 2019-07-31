import Gradient from '../../../src/renderingEngine/colors/gradient/Gradient';
import LinearGradient from '../../../src/renderingEngine/colors/gradient/LinearGradient';
import RadialGradient from '../../../src/renderingEngine/colors/gradient/RadialGradient';
import ServiceLocator from '../../../src/core/ServiceLocator';
import Point from '../../../src/core/Point';
import BaseClassConstructedError from '../../../src/core/errorHandling/errors/BaseClassConstructedError';
import MethodNotImplementedError from '../../../src/core/errorHandling/errors/MethodNotImplementedError';


class MockGradient {
  constructor() {
    this.colorStops = [];
  }

  addColorStop(offset, color) {
    this.colorStops.push({ offset, color });
  }
}

class MockContext {
  constructor() {
    this.gradient = new MockGradient();
  }

  createLinearGradient(startPoint, endPoint) {
    return this.gradient;
  }

  createRadialGradient(startCircle, endCircle) {
    return this.gradient;
  }
}

class TestGradient extends Gradient {

}

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new MockContext());
});

describe('Gradient', () => {
  it('should throw an error when trying to construct the gradient class', () => {
    // Assert
    expect(() => { new Gradient(); }).toThrow(BaseClassConstructedError);
  });
  it('should throw an error if the buildGradient method is not overriden', () => {
    // Act
    const testGradient = new TestGradient();

    // Assert
    expect(() => { testGradient.buildGradient(); }).toThrow(MethodNotImplementedError);
  });
});

describe('LinearGradient', () => {
  it('should create a linear gradient with the provided properties', () => {
    // Arrange
    const startPoint = new Point(10, 30);
    const endPoint = new Point(40, 50);

    // Act
    const linearGradient = new LinearGradient(startPoint, endPoint);

    // Assert
    expect(linearGradient).toBeDefined();
    expect(linearGradient.startPoint.X).toBe(startPoint.X);
    expect(linearGradient.startPoint.Y).toBe(startPoint.Y);
    expect(linearGradient.endPoint.X).toBe(endPoint.X);
    expect(linearGradient.endPoint.Y).toBe(endPoint.Y);
  });
  it('should build the linear gradient with the provided properties', () => {
    // Arrange
    const startPoint = new Point(10, 30);
    const endPoint = new Point(40, 50);
    const linearGradient = new LinearGradient(startPoint, endPoint);
    linearGradient.addColorStop(0.5, 'red');
    linearGradient.addColorStop(0.7, 'blue');

    // Act
    const gradient = linearGradient.buildGradient();

    // Assert
    expect(gradient).toBeDefined();
    expect(linearGradient.getColorStops().length).toBe(2);
  });
});

describe('RadialGradient', () => {
  it('should create a radial gradient with the provided properties', () => {
    // Arrange
    const startPoint = new Point(10, 30);
    const startRadius = 4;
    const endPoint = new Point(40, 50);
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
    const startPoint = new Point(10, 30);
    const startRadius = 4;
    const endPoint = new Point(40, 50);
    const endRadius = 6;
    const radialGradient = new RadialGradient(startPoint, startRadius, endPoint, endRadius);
    radialGradient.addColorStop(0.5, 'red');
    radialGradient.addColorStop(0.7, 'blue');

    // Act
    const gradient = radialGradient.buildGradient();

    // Assert
    expect(gradient).toBeDefined();
    expect(radialGradient.getColorStops().length).toBe(2);
  });
});
