import start from 'Game';
import AssetCache from 'managers/AssetCache';
import DemoScene from './DemoScene';
import ShapeDemoScene from './ShapeDemoScene';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: 'demoScene', scene: DemoScene },
});
