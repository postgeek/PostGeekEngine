

afterEach(() => {
  jest.clearAllMocks();
});

describe('width', () => {
  it.skip('should properly set the width', () => {
    // Arrange

    // Act

    // Assert
  });
  it.skip('should show a warning if the width is not a power of 2', () => {
    // Arrange
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    // Act

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});

describe('height', () => {
  it.skip('should properly set the height', () => {
    // Arrange

    // Act

    // Assert
  });
  it.skip('should show a warning if the height is not a power of 2', () => {
    // Arrange
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    // Act

    // Assert
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
  });
});
