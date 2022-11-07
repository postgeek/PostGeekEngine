import DemoScene from './2DMapDemo/DemoScene';
import ColorPickerDemoScene from './Colors/ColorPickerDemoScene';
import CollisionScene from './Collision/CollisionScene';
import BallCollisionScene from './Collision/Ball/BallCollisionScene';
import PhysicsEngineScene from './Collision/PhysicsEngine/PhysicsEngineScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ThemeDemoScene from './Theme/DesignSystemScene';
import DefaultColorDemoScene from './DefaultColorDemo/DefaultColorDemoScene';
import PongScene from './Games/Pong/PongScene';
import GraphicDemoScene from './GraphicTests/GraphicDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import MouseDemoScene from './mouseDemo/MouseDemoScene';
import SoundScene from './Sound/SoundScene';
import HUDDesignerScene from './Tools/HUDDesigner/HUDDesignerScene';
import PathBuilderDemoScene from './PathBuilderDemo/PathBuilderDemoScene';

import './style.scss';
import Game from '../src/Game';

class Main {
  constructor() {
    this._demos = [
      { key: 'PathBuilderDemo', scene: PathBuilderDemoScene, name: 'Path' },
      { key: 'ballDemoScene', scene: BallCollisionScene, name: 'Ball Collision' },
      { key: 'physicsEngine', scene: PhysicsEngineScene, name: 'PhysicsEngine' },
      { key: 'pongScene', scene: PongScene, name: 'Pong' },
      { key: 'graphicDemoScene', scene: GraphicDemoScene, name: 'Graphic' },
      { key: 'KeyboardDemoScene', scene: KeyboardDemoScene, name: 'Keyboard' },
      { key: 'demoScene', scene: DemoScene, name: '2D Map' },
      { key: 'colorPickerDemoscene', scene: ColorPickerDemoScene, name: 'Color' },
      { key: 'defaultColorDemoScene', scene: DefaultColorDemoScene, name: 'Default Color' },
      { key: 'collisionscene', scene: CollisionScene, name: 'Collision' },
      { key: 'shapeDemoScene', scene: ShapeDemoScene, name: 'Shape' },
      { key: 'MouseDemoScene', scene: MouseDemoScene, name: 'Mouse' },
      { key: 'themeDemoScene', scene: ThemeDemoScene, name: 'Theme' },
      { key: 'soundScene', scene: SoundScene, name: 'Sound' },
      { key: 'HUDTool', scene: HUDDesignerScene, name: 'Hud' },
    ];
  }

  initMenu() {
    const menuElement = document.getElementById('menu');

    this._demos.forEach((demo) => {
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
    debugOptionElement.checked = false;
    debugOptionElement.onclick = () => Window.Main.debugClicked(debugOptionElement.checked);
  }

  runDemo(key) {
    const demo = this._demos.find((d) => d.key === key);
    if (this._game.sceneManager.activeSceneKey !== key) {
      try {
        this._game.sceneManager.runningScene.cleanUp();
      } catch (e) {}
      this._game.sceneManager.addScene({ key: demo.key, scene: demo.scene });
      this._game.sceneManager.startScene(demo.key, this._game);
    }
  }

  debugClicked() {
    this._game.toggleDebug();
  }

  start() {
    var index = 0; //this._demos.length - 1;
    this._game = new Game({
      canvas: document.getElementById('canvas'),
      initialScene: this._demos[index],
    });
    this._game.init();
  }
}

Window.Main = new Main();
Window.Main.initMenu();
Window.Main.initSubMenu();
Window.Main.start();
