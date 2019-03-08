class SceneManager {
  constructor(){
    this.scenes = [];
    this.runningScene = null;
  }

  addScene({key, scene}) {
    this.scenes[key] = scene;
  }

  getScene(key) {
    return this.scenes[key];
  }

  startScene(key, game) {
    const scene = this.getScene(key);
    this.runningScene = new (scene)(game)
  }

  get RunningScene() {
    return this.runningScene;
  }
}

export default SceneManager;