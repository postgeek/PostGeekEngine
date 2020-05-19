import Point from '../../src/core/Point';

describe('Point', () => {
    it('Should properly return the same point if no vectors provided', () => {
    // Arrange
    const firstPoint = new Point(10,10);
    const expectedPoint = new Point(10,10);

    // Act
    var result = firstPoint.add();

    // Assert
    expect(result.x).toBe(expectedPoint.x);
    expect(result.y).toBe(expectedPoint.y);
  });
  it('Should properly add two points together', () => {
    // Arrange
    const firstPoint = new Point(10,10);
    const secondPoint = new Point(4,6);
    const expectedPoint = new Point(14,16);

    // Act
    var result = firstPoint.add(secondPoint);

    // Assert
    expect(result.x).toBe(expectedPoint.x);
    expect(result.y).toBe(expectedPoint.y);
  });
  it('Should properly add three points together', () => {
    // Arrange
    const firstPoint = new Point(10,10);
    const secondPoint = new Point(4,6);
    const thirdPoint = new Point(12,13);
    const expectedPoint = new Point(26,29);

    // Act
    var result = firstPoint.add(secondPoint, thirdPoint);

    // Assert
    expect(result.x).toBe(expectedPoint.x);
    expect(result.y).toBe(expectedPoint.y);
  });
  it('Should properly calculate the unit vector', () => {
    // Arrange
    var point = new Point(3,4);
    var expectedUnitVector = new Point(0.6, 0.8);

    // Act 
    var result = point.unitVector();

    // Assert
    expect(result.x).toBe(expectedUnitVector.x);
    expect(result.y).toBe(expectedUnitVector.y);
  });
  it('Should properly calculate the magnitude of the vector', () => {
    // Arrange
    var point = new Point(3,4);
    var expectedMagnitude = 5;

    // Act
    var result = point.magnitude();

    // Assert
    expect(result).toBe(expectedMagnitude);
  });
  it('Should properly calculate the dot product of two vectors', () => {
    // Arrange
    var firstPoint = new Point(3,4);
    var secondPoint = new Point(5,5);
    var expectedDotProduct = 35;

    // Act
    var result = Point.dotProduct(firstPoint, secondPoint);

    // Assert
    expect(result).toBe(expectedDotProduct);
  });
  it('Should properly calculate the dot product of two vectors', () => {
    // Arrange
    var firstPoint = new Point(3,4);
    var secondPoint = new Point(5,5);
    var expectedDotProduct = 35;

    // Act
    var result = firstPoint.dotProduct(secondPoint);

    // Assert
    expect(result).toBe(expectedDotProduct);
  });
});