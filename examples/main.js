import start from 'Game';
import DemoScene from './2DMapDemo/DemoScene';
import ShapeDemoScene from './ShapeDemo/ShapeDemoScene';
import ColorScene from './Color/ColorScene';
import ThemeDemoScene from './Theme/ThemeDemoScene';
import KeyboardDemoScene from './KeyboardDemo/KeyboardDemoScene';
import MouseDemoScene from './mouseDemo/MouseDemoScene';

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

  static startMouseDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'MouseDemoScene', scene: MouseDemoScene },
    });
  }

  static startThemeDemo() {
    start({
      debug: true,
      canvas: document.getElementById('canvas'),
      initialScene: { key: 'themeDemoScene', scene: ThemeDemoScene },
    });
  }
};

Window.Main.startMouseDemo();