import Point from "../../../../src/core/Point";

export default class Ball { 
    constructor(circle, id) {
        this._id = id;
        this._circle = circle;
        this._oldPosition = new Point(0,0);
        this._acceleration = new Point(0,0);
        this._velocity = new Point(0,0);
        this._mass = this.circle.radius * 10;
        this._simulationTimeRemaining = 0;
    }

    update(timestep) {

    }

    set simulationTimeRemaining(value) {
        this._simulationTimeRemaining = value;
    }

    get simulationTimeRemaining() {
        return this._simulationTimeRemaining;
    }

    get oldPosition() {
        return this._oldPosition;
    }

    get acceleration() {
        return this._acceleration;
    }

    get velocity() {
        return this._velocity; 
    }

    set mass(value) {
        this._mass = value;
    }

    get mass() {
        return this._mass;
    }

    get circle() {
        return this._circle
    }

    get x() {
        return this.circle.x;
    }

    get y() {
        return this.circle.y;
    }

    get radius() {
        return this.circle.radius;
    }

    get id() {
        return this._id;
    }
}