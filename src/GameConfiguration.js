import InvalidArguementError from "./core/errorHandling/errors/InvalidArguementError";

class GameConfiguration {

    constructor(canvas, initialScene) {
        if (!GameConfiguration.isConfigValid({canvas, initialScene})) {
            throw new InvalidArguementError(this);
        }
        this.canvas = canvas;
        this.initialScene = initialScene;
    }

    set initialScene(value) {
        this._initialScene = value;
    }

    get initialScene() {
        return this._initialScene;
    }

    set canvas(value) {
        this._canvas = value;
    }

    get canvas() {
        return this._canvas;
    }

    static isConfigValid(gameConfiguration) {
        const {canvas, initialScene} = gameConfiguration;
        return (gameConfiguration !== undefined) 
        && (canvas !== undefined) 
        && (initialScene !== undefined);
    }

} export default GameConfiguration;