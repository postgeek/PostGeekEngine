class SceneManager {
  constructor() {
    this.scenes = [];
    this.runningScene = null;
    this._activeSceneKey = null;
  }

  get activeSceneKey() {
    return this._activeSceneKey;
  }

  addScene({ key, scene }) {
    this.scenes[key] = scene;
  }

  getScene(key) {
    return this.scenes[key];
  }

  startScene(key, game) {
    const scene = this.getScene(key);
    this.runningScene = new (scene)(game); // eslint-disable-line new-cap
    this.runningScene.IsActive = true;
    this._activeSceneKey = key;
  }

  set runningScene(value) {
    this._runningScene = value;
  }

  get runningScene() {
    return this._runningScene;
  }
}

export default SceneManager;
