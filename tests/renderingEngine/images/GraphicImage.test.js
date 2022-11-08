import GraphicImage from '../../../src/renderingEngine/images/GraphicImage';
import UndefinedError from '../../../src/core/errorHandling/errors/UndefinedError';
import Point from '../../../src/core/Point';
import ContextMock from '../../mocks/ContextMock';
import ImageMock from '../../mocks/ImageMock';

import ServiceLocator from '../../../src/core/ServiceLocator';

beforeEach(() => {
  ServiceLocator.instance.clear();
  ServiceLocator.instance.register('context', new ContextMock());
});

describe('height', () => {
  it('should get the height of the image', () => {
    // Arrange
    const imageMock = new ImageMock();
    const image = new GraphicImage(imageMock);
    const imageMockHeightSpy = jest.spyOn(imageMock, 'height', 'get').mockReturnValue(0);

    // Act
    const { height } = image;

    // Assert
    expect(height).toBe(0);
  });
  it('should throw an error if the image is undefined', () => {
    // Arrange
    const image = new GraphicImage();

    // Assert
    expect(() => { const { height } = image; }).toThrow(UndefinedError);
  });
});

describe('width', () => {
  it('should get the height of the image', () => {
    // Arrange
    const imageMock = new ImageMock();
    const image = new GraphicImage(imageMock);
    const imageMockWidthSpy = jest.spyOn(imageMock, 'width', 'get').mockReturnValue(0);

    // Act
    const { width } = image;

    // Assert
    expect(width).toBe(0);
  });
  it('should throw an error if the image is undefined', () => {
    // Arrange
    const image = new GraphicImage();

    // Assert
    expect(() => { const { width } = image; }).toThrow(UndefinedError);
  });
});

describe('draw', () => {
  it('should draw the image on screen if the graphic image isLoaded = true', () => {
    // Arrange
    const image = new GraphicImage();
    image.isLoaded = true;
    const context = ServiceLocator.instance.locate('context');
    const contextDrawImageSpy = jest.spyOn(context, 'drawImage');

    // Act
    image.draw();

    // Assert
    expect(contextDrawImageSpy).toHaveBeenCalledTimes(1);
  });
  it('should not draw the image on screen if the graphic image isLoaded = false', () => {
    // Arrange
    const image = new GraphicImage();
    image.isLoaded = false;
    const context = ServiceLocator.instance.locate('context');
    const contextDrawImageSpy = jest.spyOn(context, 'drawImage');

    // Act
    image.draw();

    // Assert
    expect(contextDrawImageSpy).toHaveBeenCalledTimes(0);
  });
  it('should draw the image with a mask on screen if isLoaded = true', () => {
    // Arrange
    const image = new GraphicImage();
    image.isLoaded = true;
    const context = ServiceLocator.instance.locate('context');
    const contextDrawImageSpy = jest.spyOn(context, 'drawImage');

    // Act
    image.drawImageWithMask(new Point(0, 0), new Point(11, 22), 12, 12);

    // Assert
    expect(contextDrawImageSpy).toHaveBeenCalledTimes(1);
  });
  it('should not draw the image with a mask on screen if isLoaded = false', () => {
    // Arrange
    const image = new GraphicImage();
    image.isLoaded = false;
    const context = ServiceLocator.instance.locate('context');
    const contextDrawImageSpy = jest.spyOn(context, 'drawImage');

    // Act
    image.drawImageWithMask(new Point(0, 0), new Point(11, 22), 12, 12);

    // Assert
    expect(contextDrawImageSpy).toHaveBeenCalledTimes(0);
  });
});
