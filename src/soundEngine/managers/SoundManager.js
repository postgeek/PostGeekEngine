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
    Object.entries(this.sounds).forEach(([key, sound]) => { // eslint-disable-line no-unused-vars
      if (sound.isPlaying) {
        sound.stop();
      }
    });
  }

  get sounds() {
    return this._sounds;
  }
}
