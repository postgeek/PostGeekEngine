class Volume {
    constructor(audioContext, left, right = left) {
        this._audioContext = audioContext;

        this._leftGainNode = this._audioContext.createGain();
        this._rightGainNode = this._audioContext.createGain();

        this.left = left;
        this.right = right;
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

    get volume() {
        return this._left;
    }

    set left(value) {
        this._left = value;
        this._leftGainNode.gain.setValueAtTime(value, this._audioContext.currentTime);
    }

    set right(value) {
        this._right = value;
        this._rightGainNode.gain.setValueAtTime(value, this._audioContext.currentTime);
    }

    set volume(value) {
        this._left = value;
        this._right = value;
        this._leftGainNode.gain.setValueAtTime(value, this._audioContext.currentTime);
        this._rightGainNode.gain.setValueAtTime(value, this._audioContext.currentTime);
    }

    get leftGainNode() {
        return this._leftGainNode;
    }

    get rightGainNode() {
        return this._rightGainNode;
    }
}
export default Volume;