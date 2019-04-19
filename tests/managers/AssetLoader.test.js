import AssetLoader from '../../src/managers/AssetLoader';

describe('isValidUrl', () => {
  it('should validate an absolute path as valid', () => {
    // Arange
    const loader = new AssetLoader();
    const path = "/some/path/to/a/file.txt"

    // Act
    const isValid = loader.isValidUrl(path);

    // Asset
    expect(isValid).toBe(true);

  })
  it('should validate a relative path as valid', () => {
    // Arange
    const loader = new AssetLoader();
    const path = "some/path/to/a/file.txt"

    // Act
    const isValid = loader.isValidUrl(path);

    // Asset
    expect(isValid).toBe(true);

  })
  it('should validate a filename as invalid', () => {
    // Arange
    const loader = new AssetLoader();
    const path = "file.txt"

    // Act
    const isValid = loader.isValidUrl(path);

    // Asset
    expect(isValid).toBe(false);

  })
  it('should validate a path prefixed with ./ to be valid', () => {
    // Arange
    const loader = new AssetLoader();
    const path = "./path/file.txt"

    // Act
    const isValid = loader.isValidUrl(path);

    // Asset
    expect(isValid).toBe(true);

  })
  it('should validate a path prefixed with http to be invalid', () => {
    // Arange
    const loader = new AssetLoader();
    const path = "http://example.com/path/file.txt"

    // Act
    const isValid = loader.isValidUrl(path);

    // Asset
    expect(isValid).toBe(false);

  })
})