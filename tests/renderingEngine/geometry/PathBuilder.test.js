import 'jest-canvas-mock';
import PathBuilder from '../../../src/renderingEngine/geometry/PathBuilder';
import Vec2D from '../../../src/core/Vec2D';

describe('constructor', () => {
  it('should construct a new path 2D', () => {
    // Arrange
    const pathBuilder = new PathBuilder();

    // Assert
    expect(pathBuilder).not.toBe(null);
  });
});

describe('closePath', () => {
  it('should close the current path', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DClosePathSpy = jest.spyOn(path, 'closePath');

    // Act
    pathBuilder.closePath();

    // Assert
    expect(path2DClosePathSpy).toHaveBeenCalledTimes(1);
  });
});

describe('moveTo', () => {
  it('should move the current path to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DMoveToSpy = jest.spyOn(path, 'moveTo');

    // Act
    pathBuilder.moveTo(new Vec2D(10, 22));

    // Assert
    expect(path2DMoveToSpy).toHaveBeenCalledTimes(1);
  });
});

describe('lineTo', () => {
  it('should draw a line to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DLineToSpy = jest.spyOn(path, 'lineTo');

    // Act
    pathBuilder.lineTo(new Vec2D(10, 22));

    // Assert
    expect(path2DLineToSpy).toHaveBeenCalledTimes(1);
  });
});

describe('bezierCurveTo', () => {
  it('should draw a quadratic curve to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DBezierCurveToSpy = jest.spyOn(path, 'bezierCurveTo');

    // Act
    pathBuilder.bezierCurveTo(new Vec2D(10, 22), new Vec2D(5, 80), new Vec2D(35, 56));

    // Assert
    expect(path2DBezierCurveToSpy).toHaveBeenCalledTimes(1);
  });
});

describe('quadraticCurveTo', () => {
  it('should draw quadratic curve to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DQuadraticCurveToSpy = jest.spyOn(path, 'quadraticCurveTo');

    // Act
    pathBuilder.quadraticCurveTo(new Vec2D(10, 22), new Vec2D(5, 80));

    // Assert
    expect(path2DQuadraticCurveToSpy).toHaveBeenCalledTimes(1);
  });
});

describe('arcTo', () => {
  it('should draw an arc to the given point', () => {
    // Arrange
    const pathBuilder = new PathBuilder();
    const { path } = pathBuilder;
    const path2DArcToSpy = jest.spyOn(path, 'arcTo');

    // Act
    pathBuilder.arcTo(new Vec2D(10, 22), new Vec2D(5, 80), 20);

    // Assert
    expect(path2DArcToSpy).toHaveBeenCalledTimes(1);
  });
});
