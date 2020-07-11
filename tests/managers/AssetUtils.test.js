import * as utils from '../../src/core/managers/AssetUtils';

describe('isValidUrl', () => {
  it('should validate an absolute path as valid', () => {
    // Arange
    const path = '/some/path/to/a/file.txt';

    // Act
    const isValid = utils.isValidUrl(path);

    // Assert
    expect(isValid).toBe(true);
  });
  it('should validate a relative path as valid', () => {
    // Arange
    const path = 'some/path/to/a/file.txt';

    // Act
    const isValid = utils.isValidUrl(path);

    // Assert
    expect(isValid).toBe(true);
  });
  it('should validate a filename as invalid', () => {
    // Arange
    const path = 'file.txt';

    // Act
    const isValid = utils.isValidUrl(path);

    // Assert
    expect(isValid).toBe(false);
  });
  it('should validate a path prefixed with ./ to be valid', () => {
    // Arange
    const path = './path/file.txt';

    // Act
    const isValid = utils.isValidUrl(path);

    // Assert
    expect(isValid).toBe(true);
  });
  it('should validate a path prefixed with http to be invalid', () => {
    // Arange
    const path = 'http://example.com/path/file.txt';

    // Act
    const isValid = utils.isValidUrl(path);

    // Assert
    expect(isValid).toBe(false);
  });
});
