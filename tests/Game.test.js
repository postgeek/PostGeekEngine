import Game from '../src/Game'
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import SceneMock from './mocks/SceneMock';
import GameConfiguration from '../src/GameConfiguration';
import InitialSceneConfiguration from '../src/InitialSceneConfiguration';
import ServiceLocator from '../src/core/ServiceLocator';
import SceneManager from '../src/core/managers/SceneManager';

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
    beforeEach(() => {
        gameConfiguration = new GameConfiguration(canvas, initialScene);
        ServiceLocator.instance.clear();
    });
    describe('Game - Scene setup', () => {
        it('Should add the scene to the SceneManager', () => {
            // Arrange
            const sceneManager = new SceneManager();
            ServiceLocator.instance.register('sceneManager', sceneManager);
            const key = 'scene1';
            const scene = SceneMock;
            const sceneManagerAdd = jest.spyOn(sceneManager, 'addScene');
            const game = new Game(gameConfiguration);

            // Act
            game.addScene({key, scene});

            // Assert
            expect(sceneManagerAdd).toHaveBeenCalledTimes(1);
            expect(sceneManager.getScene(key)).toBe(SceneMock);
        });
    });
    it("Should correctly start the game", () => {
        // Arrange 
        var game = new Game(gameConfiguration);
        const gameStart = jest.spyOn(game, 'start');
        var isStarted = true;

        // Act
        game.init();

        // Assert
        expect(gameStart).toHaveBeenCalledTimes(1);
        expect(game.isStarted).toBe(isStarted);
    });
    it("Should get the canvas width", () => {
        // Arrange
        var game = new Game(gameConfiguration);
        var expectedWidth = 1200;

        // Act
        var result = game.canvasWidth;

        // Assert
        expect(result).toBe(expectedWidth);
    });
    it("Should get the canvas height", () => {
        // Arrange
        var game = new Game(gameConfiguration);
        var expectedHeight = 800;

        // Act
        var result = game.canvasHeight;

        // Assert
        expect(result).toBe(expectedHeight);
    });
})