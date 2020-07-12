import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ColorScene from './Color/ColorScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import MouseDemoScene from './mouseDemo/MouseDemoScene';

class Main {  
  start() {
    this._game = start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'demoScene', scene: DemoScene },
    });
  }

  start2DMapDemo() {
    this._game.sceneManager.addScene({ key: 'demoScene', scene: DemoScene });
    this._game.sceneManager.startScene('demoScene', this._game);
  }

  startColorScene() {
    this._game.sceneManager.addScene({ key: 'colorscene', scene: ColorScene });
    this._game.sceneManager.startScene('colorscene', this._game);
  }

  startShapeDemo() {
    this._game.sceneManager.addScene({ key: 'shapeDemoScene', scene: ShapeDemoScene });
    this._game.sceneManager.startScene('shapeDemoScene', this._game);
  }

  startKeyboardDemo() {
    this._game.sceneManager.addScene({ key: 'KeyboardDemoScene', scene: KeyboardDemoScene });
    this._game.sceneManager.startScene('KeyboardDemoScene', this._game);
  }

  startMouseDemo() {
    this._game.sceneManager.addScene({ key: 'MouseDemoScene', scene: MouseDemoScene });
    this._game.sceneManager.startScene('MouseDemoScene', this._game);
  }

  startThemeDemo() {
    this._game.sceneManager.addScene({ key: 'themeDemoScene', scene: ThemeDemoScene });
    this._game.sceneManager.startScene('themeDemoScene', this._game);
  }
};


Window.Main = new Main();
Window.Main.start();