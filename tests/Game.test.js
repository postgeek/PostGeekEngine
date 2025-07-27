/**
 * @jest-environment jsdom
 */
import Game from '../src/Game'
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import SceneMock from './mocks/SceneMock';
import MiddlewareMock from './mocks/MiddlewareMock';
import GameConfiguration from '../src/GameConfiguration';
import InitialSceneConfiguration from '../src/InitialSceneConfiguration';
import ServiceLocator from '../src/core/ServiceLocator';
import SceneManager from '../src/core/managers/SceneManager';
import MiddlewareManager from '../src/core/managers/MiddlewareManager';
import InvalidStateOperationError from '../src/core/errorHandling/errors/InvalidStateOperationError';
import AudioContextMock from './mocks/AudioContextMock';

// Set up global AudioContext mocks
global.AudioContext = AudioContextMock;
global.webkitAudioContext = AudioContextMock;

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
    it('should throw Invalid arguement error if an invalid game configuration is provided', () => {
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
        it('should add the scene to the SceneManager', () => {
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
        it('should add a custom middleware', () => {
            // Arrange
            const middlewareManager = new MiddlewareManager();
            ServiceLocator.instance.register('middlewareManager', middlewareManager);
            const key = "mockmiddleware";
            const middlewareMock = new MiddlewareMock()
            gameConfiguration.middleware[key] = middlewareMock;
            const middlewareManagerAdd = jest.spyOn(middlewareManager, 'add');
            const game = new Game(gameConfiguration);
            
            // Act
            game.init();

            // Assert
            expect(middlewareManagerAdd).toHaveBeenCalledTimes(2);
            expect(middlewareManager.get(key)).toBe(middlewareMock);
        });
    });
    describe('Game - game loop', () => {
        it('should properly step through the first loop of the game', () => {
            // Arrange
            const game = new Game(gameConfiguration);
            const key = initialScene.key;
            const gameDraw = jest.spyOn(game, 'draw');
            const isStarted = true;
            game.init();

            // Act
            game.initialStepThrough(1);

            // Assert
            expect(gameDraw).toHaveBeenCalledTimes(1);
            expect(game.isStarted).toBe(isStarted);
        });
        it('should call panic if the game has fallen too behind', () => {
            // Arrange
            const game = new Game(gameConfiguration);
            const key = initialScene.key;
            const timeStep = 1000 / 60;
            const maxUpdateSteps = 240;
            const timeStamp = timeStep * maxUpdateSteps;
            const gamePanic = jest.spyOn(game, 'panic');
            game.init();

            // Act
            game.initialStepThrough(0);
            game.gameLoop(timeStamp);

            // Assert
            expect(gamePanic).toHaveBeenCalledTimes(1);
        });
        it('should not call panic if the game has not fallen too behind', () => {
            // Arrange
            const game = new Game(gameConfiguration);
            const key = initialScene.key;
            const timeStep = 1000 / 60;
            const maxUpdateSteps = 240;
            const timeStamp = timeStep * maxUpdateSteps - 1;
            const gamePanic = jest.spyOn(game, 'panic');
            game.init();

            // Act
            game.initialStepThrough(0);
            game.gameLoop(timeStamp);

            // Assert
            expect(gamePanic).toHaveBeenCalledTimes(0);
        });
    });
    it("should correctly start the game", () => {
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
    it("should correctly stop the game if started", () => {
        // Arrange 
        var game = new Game(gameConfiguration);
        const gameStop = jest.spyOn(game, 'stop');
        var isStarted = false;
        var isRunning = false;

        // Act
        game.init();
        game.stop();

        // Assert
        expect(gameStop).toHaveBeenCalledTimes(1);
        expect(game.isStarted).toBe(isStarted);
        expect(game.isRunning).toBe(isRunning);
    });
    it("should throw an InvalidStateOperationError if not previously started", () => {
        // Arrange 
        var game = new Game(gameConfiguration);

        // Assert
        expect(() => { game.stop(); }).toThrow(InvalidStateOperationError);
    });
    it("should toggle the debug middleware", () => {
        // Arrange 
        var game = new Game(gameConfiguration);
        var isDebugEnabled = true;
        game.init();

        // Act
        game.toggleDebug();

        // Assert
        expect(game.isDebugEnabled).toBe(isDebugEnabled);
    });    
    it("should get the canvas width", () => {
        // Arrange
        var game = new Game(gameConfiguration);
        var expectedWidth = 1200;

        // Act
        var result = game.canvasWidth;

        // Assert
        expect(result).toBe(expectedWidth);
    });
    it("should get the canvas height", () => {
        // Arrange
        var game = new Game(gameConfiguration);
        var expectedHeight = 800;

        // Act
        var result = game.canvasHeight;

        // Assert
        expect(result).toBe(expectedHeight);
    });
})
