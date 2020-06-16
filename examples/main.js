import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import CollisionScene from './Collision/CollisionScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import QaudTreeDemoScene from './QuadTreeDemo/QuadTreeDemoScene';
import PhysicsEngineDemoScene from './PhysicsEngineDemo/PhysicsEngineDemoScene';

Window.Main = class Main {
  static start2DMapDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'demoScene', scene: DemoScene },
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

  static startQuadTreeDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'QaudTreeDemoScene', scene: QaudTreeDemoScene },
    });
  }

  static startPhysicsEngineDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'PhysicsEngineDemoScene', scene: PhysicsEngineDemoScene },
    });
  }
};

Window.Main.startPhysicsEngineDemo();