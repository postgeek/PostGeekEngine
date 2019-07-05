import start from 'Game';
import DemoScene from './DemoScene';
import PostGeekDebugger from '../../src/debug/PostGeekDebugger';
import ShapeDemoScene from './ShapeDemoScene';

start({
  debug: true,
  middleware: [new PostGeekDebugger()],
  canvas: document.getElementById('canvas'),
  initialScene: { key: 'demoScene', scene: DemoScene },
});
