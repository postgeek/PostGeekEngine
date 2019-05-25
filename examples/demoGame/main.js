import start from 'Game';
import DemoScene from './DemoScene';
import ShapeDemoScene from './ShapeDemoScene';
import DesignSystemScene from './DesignSystemScene';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: 'DesignSystemScene', scene: DesignSystemScene },
});
