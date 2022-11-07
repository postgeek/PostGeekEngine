import PathBuilder from '../../../src/renderingEngine/geometry/Path/PathBuilder';
import Point from '../../../src/core/Point';
import ContextMock from '../../mocks/ContextMock';
import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('constructor', () => {
  it('should construct a new path 2D', () => {
    // Arrange
    const pathBuilder = new PathBuilder();

    // Assert
    expect(pathBuilder).not.toBe(null);
  });
});

describe('moveTo', () => {
  it('should move the current path to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DMoveToSpy = jest.spyOn(path, 'addStep');
    const functionName = "moveTo";

    // Act
    pathBuilder.moveTo(new Point(10, 22));

    // Assert
    expect(path2DMoveToSpy).toHaveBeenCalledTimes(1);
    expect(pathBuilder.path.getSteps()[0].name).toBe(functionName);
  });
});

describe('lineTo', () => {
  it('should draw a line to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DLineToSpy = jest.spyOn(path, 'addStep');
    const functionName = "lineTo";

    // Act
    pathBuilder.lineTo(new Point(10, 22));

    // Assert
    expect(path2DLineToSpy).toHaveBeenCalledTimes(1);
    expect(pathBuilder.path.getSteps()[0].name).toBe(functionName);
  });
});

describe('bezierCurveTo', () => {
  it('should draw a quadratic curve to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DBezierCurveToSpy = jest.spyOn(path, 'addStep');
    const functionName = "bezierCurveTo";

    // Act
    pathBuilder.bezierCurveTo(new Point(10, 22), new Point(5, 80), new Point(35, 56));

    // Assert
    expect(path2DBezierCurveToSpy).toHaveBeenCalledTimes(1);
    expect(pathBuilder.path.getSteps()[0].name).toBe(functionName);
  });
});

describe('quadraticCurveTo', () => {
  it('should draw quadratic curve to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DQuadraticCurveToSpy = jest.spyOn(path, 'addStep');
    const functionName = "quadraticCurveTo";

    // Act
    pathBuilder.quadraticCurveTo(new Point(10, 22), new Point(5, 80));

    // Assert
    expect(path2DQuadraticCurveToSpy).toHaveBeenCalledTimes(1);
    expect(pathBuilder.path.getSteps()[0].name).toBe(functionName);
  });
});

describe('arcTo', () => {
  it('should draw an arc to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DArcToSpy = jest.spyOn(path, 'addStep');
    const functionName = "arcTo";

    // Act
    pathBuilder.arcTo(new Point(10, 22), new Point(5, 80), 20);

    // Assert
    expect(path2DArcToSpy).toHaveBeenCalledTimes(1);
    expect(pathBuilder.path.getSteps()[0].name).toBe(functionName);
  });
});
