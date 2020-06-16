export default class LineSegment { 
    constructor(startPoint, endPoint, radius) {
        this._startPoint = startPoint;
        this._endPoint = endPoint;
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    get startPoint() {
        return this._startPoint;
    }

    get endPoint() {
        return this._endPoint;
    }
}