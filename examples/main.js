import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import PostGeekDebugger from '../src/core/debug/PostGeekDebugger';

Window.Main = class Main {
  static start2DMapDemo() {
    start({
      debug: true,
      middleware: [new PostGeekDebugger()],
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'demoScene', scene: DemoScene },
    });
  }

  static startShapeDemo() {
    start({
      debug: true,
      middleware: [new PostGeekDebugger()],
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'shapeDemoScene', scene: ShapeDemoScene },
    });
  }

  static startThemeDemo() {
    start({
      debug: true,
      middleware: [new PostGeekDebugger()],
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'themeDemoScene', scene: ThemeDemoScene },
    });
  }
};
