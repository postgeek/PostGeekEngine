class SceneManager {
  constructor() {
    this.scenes = [];
    this.runningScene = null;
  }

  addScene({ key, scene }) {
    this.scenes[key] = scene;
  }

  getScene(key) {
    return this.scenes[key];
  }

  startScene(key) {
    const scene = this.getScene(key);
    // TODO: Change to initialize the scene and not instantiate it here ??
    this.runningScene = new (scene)();
    this.runningScene.IsActive = true;
  }

  get RunningScene() {
    return this.runningScene;
  }
}

export default SceneManager;
