import Game from '../src/Game'
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import SceneMock from './mocks/SceneMock';
import GameConfiguration from '../src/GameConfiguration';
import InitialSceneConfiguration from '../src/InitialSceneConfiguration';
import ServiceLocator from '../src/core/ServiceLocator';

let initialScene = null;
let canvas = null;

beforeEach(() => {
    canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.height = 800;
    canvas.width = 1200;
    initialScene = new InitialSceneConfiguration('sceneMock', 'MockScene', SceneMock);
    ServiceLocator.instance.clear();
});

describe('GameConfiguration', () => {
    it('Should throw Invalid arguement error if an invalid game configuration is provided', () => {
        // Assert
        expect(() => { new GameConfiguration() }).toThrow(InvalidArguementError);
    });
});
describe('Game', () => {
    let gameConfiguration = null;
    let game = null;
    beforeEach(() => {
        gameConfiguration = new GameConfiguration(canvas, initialScene);
        game = null;
    });
    describe('Game - Scene setup', () => {
        it.skip('Should throw an error ', () => {

        });
        it.skip('Should properly add a scene to the game', () => {

        });
    });
    it("Should correctly start the game", () => {
        // Arrange 
        game = new Game(gameConfiguration);
        const gameStart = jest.spyOn(game, 'start');

        // Act
        game.init();

        // Assert
        expect(gameStart).toHaveBeenCalledTimes(1);
    });
    it("Should get the canvas width", () => {
        // Arrange
        game = new Game(gameConfiguration);
        var expectedWidth = 1200;

        // Act
        var result = game.canvasWidth;

        // Assert
        expect(result).toBe(expectedWidth);
    });
    it("Should get the canvas height", () => {
        // Arrange
        game = new Game(gameConfiguration);
        var expectedHeight = 800;

        // Act
        var result = game.canvasHeight;

        // Assert
        expect(result).toBe(expectedHeight);
    });
})