import start from 'Game';
import DemoScene from './DemoScene';
import AssetCache from 'managers/AssetCache';

start({
  debug: true,
  canvas: document.getElementById('canvas'),
  initialScene: { key: "demoScene", scene: DemoScene }
});

const cache = new AssetCache();
cache.registerAsset('key1', './assets/demo.json');
cache.loadAsset('key1').then(asset => {
  const cachedAsset = cache.getAsset('key1');
  console.log(cachedAsset);
  console.log(asset);
});