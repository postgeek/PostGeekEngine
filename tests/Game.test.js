import Game from '../src/Game'
import start from '../src/Game';
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import SceneMock from './mocks/SceneMock';

let config = undefined;

beforeEach(() => {
    config = new Object();
    const canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.height = 800;
    canvas.width = 1200;
    config.initialScene = { scene: SceneMock, key: "sceneMock" };
    config.canvas = canvas;
});

describe('Game', () => {
    it('Should throw Invalid arguement error if an invalid config file is provided', () => {
        // Assert
        expect(() => { new Game() }).toThrow(InvalidArguementError);
    });
    it("Should get the canvas width", () => {
        // Arrange
        var game = new Game(config);
        var expectedWidth = 1200;

        // Act
        var result = game.canvasWidth;

        // Assert
        expect(result).toBe(expectedWidth);
    });
    it("Should get the canvas height", () => {
        // Arrange
        var game = new Game(config);
        var expectedHeight = 800;

        // Act
        var result = game.canvasHeight;

        // Assert
        expect(result).toBe(expectedHeight);
    });
})