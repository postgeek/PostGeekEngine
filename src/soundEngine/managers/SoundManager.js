export default class SoundManager {
    constructor() {
        this._sounds = {};
    }

    addSound(key, sound) {
        this.sounds[key] = sound;
    }

    getSound(key) {
        return this.sounds[key];
    }

    stopAllSounds() {
        for (const [key, sound] of Object.entries(this.sounds)) {
            if(sound.isPlaying) {
                sound.stop()
            }
        }
    }

    get sounds() {
        return this._sounds;
    }
}