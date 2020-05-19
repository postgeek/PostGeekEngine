import Point from '../core/Point';

export default class PhysicsEntity {

    constructor(velocity) {
        this._velocity = velocity;
        this._bounce = 1;
    }

    set velocity(value) {
        this._velocity = value;
    }

    get velocity() {
        return this._velocity;
    }

    set bounce(value) {
        this._bounce = value;
    }

    get bounce() {
        return this._bounce;
    }

    set currentPosition(value) {
        this._currentPosition = value;
    }

    get currentPosition() {
        return this._currentPosition;
    }

    set x(value) {
        this._currentPosition.x = value;
    }

    get x() {
        return this._currentPosition.x;
    }

    set y(value) {
        this._currentPosition.y = value
    }

    get y() {
        return this._currentPosition.y;
    }

}