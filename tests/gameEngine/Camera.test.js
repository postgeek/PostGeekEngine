import Camera from '../../src/gameEngine/Camera';
import Point from '../../src/core/Point';

describe('originalPoint', () => {
  it('should properly set the original point of the camera', () => {
    // Arrange
    const originalX = 0;
    const originalY = 0;
    const camera = new Camera(new Point(originalX, originalY), 100, 200);

    // Assert
    expect(camera.originalPoint.x).toBe(originalX);
    expect(camera.originalPoint.y).toBe(originalY);
  });
  it('should not change the original point even if the point changes', () => {
    // Arrange
    const originalX = 0;
    const originalY = 0;
    const camera = new Camera(new Point(originalX, originalY), 100, 200);
    const newPoint = new Point(29, 63);

    // Act
    camera.point = newPoint;

    // Assert
    expect(camera.originalPoint.x).toBe(originalX);
    expect(camera.originalPoint.y).toBe(originalY);
  });
});

describe('point', () => {
  it('should properly set the point of the camera', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const newPoint = new Point(34, 86);

    // Act
    camera.point = newPoint;

    // Assert
    expect(camera.point.x).toBe(newPoint.x);
    expect(camera.point.y).toBe(newPoint.y);
  });
});

describe('width', () => {
  it('should properly set the width of the camera', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const newWidth = 738;

    // Act
    camera.width = newWidth;

    // Assert
    expect(camera.width).toBe(newWidth);
  });
});

describe('height', () => {
  it('should properly set the height of the camera', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const newHeight = 378;

    // Act
    camera.height = newHeight;

    // Assert
    expect(camera.height).toBe(newHeight);
  });
});

describe('scrollSpeed', () => {
  it('should properly set the scroll speed of the camera', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const cameraSpeed = 5;

    // Act
    camera.scrollSpeed = cameraSpeed;

    // Assert
    expect(camera.scrollSpeed).toBe(cameraSpeed);
  });
});

describe('movement', () => {
  it('should move the camera to the left by 5 pixels', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const cameraSpeed = 5;
    const newCameraPositionX = -5;

    // Act
    camera.scrollSpeed = cameraSpeed;
    camera.moveLeft();

    // Assert
    expect(camera.point.x).toBe(newCameraPositionX);
  });
  it('should move the camera to the right by 5 pixels', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const cameraSpeed = 5;
    const newCameraPositionX = 5;

    // Act
    camera.scrollSpeed = cameraSpeed;
    camera.moveRight();

    // Assert
    expect(camera.point.x).toBe(newCameraPositionX);
  });
  it('should move the camera to the top by 5 pixels', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const cameraSpeed = 5;
    const newCameraPositionY = -5;

    // Act
    camera.scrollSpeed = cameraSpeed;
    camera.moveUp();

    // Assert
    expect(camera.point.y).toBe(newCameraPositionY);
  });
  it('should move the camera to the bottom by 5 pixels', () => {
    // Arrange
    const camera = new Camera(new Point(0, 0), 100, 200);
    const cameraSpeed = 5;
    const newCameraPositionY = 5;

    // Act
    camera.scrollSpeed = cameraSpeed;
    camera.moveDown();

    // Assert
    expect(camera.point.y).toBe(newCameraPositionY);
  });
});
