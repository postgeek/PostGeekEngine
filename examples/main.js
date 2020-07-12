import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ColorScene from './Color/ColorScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import MouseDemoScene from './mouseDemo/MouseDemoScene';

import './style.scss';

class Main {
  constructor() {
    this._demos = [
      { key: 'demoScene', scene: DemoScene, name: '2D Map Demo' },
      { key: 'colorscene', scene: ColorScene, name: 'Color Demo' },
      { key: 'shapeDemoScene', scene: ShapeDemoScene, name: 'Shape Demo' },
      { key: 'KeyboardDemoScene', scene: KeyboardDemoScene, name: 'Keyboard Demo' },
      { key: 'MouseDemoScene', scene: MouseDemoScene, name: 'Mouse Demo' },
      { key: 'themeDemoScene', scene: ThemeDemoScene, name: 'Theme Demo' }
    ]
  }

  initMenu() {
    const menuElement = document.getElementById('menu');

    this._demos.forEach(demo => {      
      const demoElement = document.createElement('li');
      demoElement.id = demo.key;
      demoElement.className = 'menu-item';

      const demoLinkElement = document.createElement('a');
      demoLinkElement.href = 'javascript:;';
      demoLinkElement.onclick = () => Window.Main.runDemo(demo.key);
      demoLinkElement.appendChild(document.createTextNode(`Start ${demo.name}`));

      demoElement.appendChild(demoLinkElement);
      menuElement.appendChild(demoElement);
    });
  }

  runDemo(key) {
    const demo = this._demos.find(d => d.key === key);
    this._game.sceneManager.addScene({ key: demo.key, scene: demo.scene });
    this._game.sceneManager.startScene(demo.key, this._game);
  }

  start() {
    this._game = start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: this._demos[0]
    });
  }
};

Window.Main = new Main();
Window.Main.initMenu();
Window.Main.start();