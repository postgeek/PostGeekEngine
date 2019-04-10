import start from 'Game';
import DemoScene from './DemoScene';
import ShapeDemoScene from './ShapeDemoScene';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: 'demoScene', scene: DemoScene },
});
