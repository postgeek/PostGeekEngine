import start from 'Game';
import DemoScene from './DemoScene';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: "demoScene", scene: DemoScene }
});