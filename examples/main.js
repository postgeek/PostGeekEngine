import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import CollisionScene from './Collision/CollisionScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ColorScene from './Color/ColorScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import PongScene from './Games/Pong/PongScene';
import GraphicDemoScene from './GraphicTests/GraphicDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';

Window.Main = class Main {
  static start2DMapDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'demoScene', scene: DemoScene },
    });
  }

  static startColorScene() {
    start({
      debug: false,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'colorscene', scene: ColorScene },
    });
  }

  static startShapeDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'shapeDemoScene', scene: ShapeDemoScene },
    });
  }

  static startKeyboardDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'KeyboardDemoScene', scene: KeyboardDemoScene },
    });
  }

  static startThemeDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'themeDemoScene', scene: ThemeDemoScene },
    });
  }

  static start2CollisionDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'collisionScene', scene: CollisionScene },
    });
  }

  static startPongDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'gamescene', scene: PongScene },
    });
  }

  static startGraphicDemoScene() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'graphicTests', scene: GraphicDemoScene },
    });
  }
};

Window.Main.startPongDemo();
// Window.Main.startGraphicDemoScene();
