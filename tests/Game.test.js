import Game from '../src/Game'
import InvalidArguementError from '../src/core/errorHandling/errors/InvalidArguementError';
import SceneMock from './mocks/SceneMock';
import ServiceLocator from '../src/core/ServiceLocator';
import CanvasRenderingContext2D from 'jest-canvas-mock/lib/classes/CanvasRenderingContext2D'

let config = undefined;

beforeEach(() => {
    config = new Object();
    const canvas = document.createElement('canvas');
    ServiceLocator.instance.clear();
    ServiceLocator.instance.register('context', new CanvasRenderingContext2D(canvas));
    config.initialScene = new SceneMock();
    config.initialScene.key = "sceneMock";
});

describe('Game', () => {
    it('Should throw Invalid arguement error if an invalid config file is provided', () => {
        // Assert
        expect(() => { new Game() }).toThrow(InvalidArguementError);
    })
})