import start from 'Game';
import AssetCache from 'managers/AssetCache';
import DemoScene from './DemoScene';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: 'demoScene', scene: DemoScene },
});
