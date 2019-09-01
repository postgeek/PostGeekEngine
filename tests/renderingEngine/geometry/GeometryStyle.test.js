import GeometryStyle from '../../../src/renderingEngine/geometry/GeometryStyle';
import InvalidArguementError from '../../../src/core/errorHandling/errors/InvalidArguementError';

import ContextMock from '../../mocks/ContextMock';

import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('lineCap', () => {
  it('should throw an error if value is not butt, round, or square', () => {
    // Arrange
    const newLineCap = 'and';
    const geometryStyle = new GeometryStyle();

    // Assert
    expect(() => { geometryStyle.lineCap = newLineCap; }).toThrow(InvalidArguementError);
  });
  it('should set the linecap property', () => {
    // Arrange
    const newLineCap = 'square';
    const geometryStyle = new GeometryStyle();

    // Act
    geometryStyle.lineCap = newLineCap;

    // Assert
    expect(geometryStyle.lineCap).toBe(newLineCap);
  });
});

describe('lineJoin', () => {
  it('should throw an error if value is not butt, round, or square', () => {
    // Arrange
    const newLineCap = 'and';
    const geometryStyle = new GeometryStyle();

    // Assert
    expect(() => { geometryStyle.lineJoin = newLineCap; }).toThrow(InvalidArguementError);
  });
  it('should set the linecap property', () => {
    // Arrange
    const newLineCap = 'bevel';
    const geometryStyle = new GeometryStyle();

    // Act
    geometryStyle.lineJoin = newLineCap;

    // Assert
    expect(geometryStyle.lineJoin).toBe(newLineCap);
  });
});

describe('apply', () => {
  it('should properly apply the geometry stylings to the context', () => {
    // Arrange
    const lineCap = 'round';
    const lineJoin = 'round';
    const miterLimit = 1;
    const lineDash = 1;
    const lineDashOffset = 2;
    const geometryStyle = new GeometryStyle({
      lineCap, lineJoin, miterLimit, lineDash, lineDashOffset,
    });
    const context = ServiceLocator.instance.locate('context');

    // Act
    const newContext = geometryStyle.apply(context);

    // Assert
    expect(newContext.lineCap).toBe(lineCap);
    expect(newContext.lineJoin).toBe(lineJoin);
    expect(newContext.miterLimit).toBe(miterLimit);
    expect(newContext.lineDash).toBe(lineDash);
    expect(newContext.lineDashOffset).toBe(lineDashOffset);
  });
});
