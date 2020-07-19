import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import ColorPickerDemoScene from './Colors/ColorPickerDemoScene';
import CollisionScene from './Collision/CollisionScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import MouseDemoScene from './mouseDemo/MouseDemoScene';

import './style.scss';

class Main {
  constructor() {
    this._demos = [
      { key: 'demoScene', scene: DemoScene, name: '2D Map Demo' },
      { key: 'colorPickerDemoscene', scene: ColorPickerDemoScene, name: 'Color Demo' },
      { key: 'collisionscene', scene: CollisionScene, name: 'Collision Demo' },
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
      demoLinkElement.appendChild(document.createTextNode(demo.name));

      demoElement.appendChild(demoLinkElement);
      menuElement.appendChild(demoElement);
    });
  }

  initSubMenu() {
    const debugOptionElement = document.getElementById('debug-option');
    debugOptionElement.checked = true;
    debugOptionElement.disabled = true;
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
}

Window.Main = new Main();
Window.Main.initMenu();
Window.Main.initSubMenu();
Window.Main.start();
