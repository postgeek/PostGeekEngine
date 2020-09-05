class InitialSceneConfiguration {
  /**
     * Creates the inital scene's configuration.
     * @param {String} key the scene's key for use in the Scene Manager.
     * @param {String} name the scene's name.
     * @param {Scene} scene the Scene object.
     */
  constructor(key, name, scene) {
    this.key = key;
    this.name = name;
    this.scene = scene;
  }

  set key(value) {
    this._key = value;
  }

  get key() {
    return this._key;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set scene(value) {
    this._scene = value;
  }

  get scene() {
    return this._scene;
  }
} export default InitialSceneConfiguration;
