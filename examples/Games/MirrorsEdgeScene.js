import Scene from 'gameEngine/scene/Scene';
import ServiceLocator from 'core/ServiceLocator';
import KeyboardKey from 'inputEngine/KeyboardKey';
import Tool from './MirrorsEdge/hud/Tool';
import ToolBar from './MirrorsEdge/hud/ToolBar';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import Point from 'core/Point';
import GameMap from './MirrorsEdge/gameObjects/GameMap';
import LightSource from './MirrorsEdge/gameObjects/buildings/LightSource';

class MirrorsEdgeScene extends Scene {

  create() {
    var keyboard = ServiceLocator.instance.locate('keyboard');
    this.mouse = ServiceLocator.instance.locate('mouse');

    this.lightSourceBuilding = new LightSource();

    this.mousePositionText = new TextGraphic(new Point(800, 20), "Mouse: (0,0)");
    this.mousePositionText.textStyle = new TextStyle({
      fillStyle: Color.RED,
      font: '18px Arial',
    });
    this.selectedToolText = new TextGraphic(new Point(800, 40), "Selected Tool: ");
    this.selectedToolText.textStyle = new TextStyle({
      fillStyle: Color.RED,
      font: '18px Arial',
    });
    this.selectedTileText = new TextGraphic(new Point(800, 60), "Selected Tile: ");
    this.selectedTileText.textStyle = new TextStyle({
      fillStyle: Color.RED,
      font: '18px Arial',
    });

    const tools = [
      { name: 'light-source', quantity: 1, hotKey: KeyboardKey.ONE, toolTip: '1' }, 
      { name: 'mirror', quantity: 5, hotKey: KeyboardKey.TWO, toolTip: '2' }, 
      { name:'stopper', hotKey: KeyboardKey.THREE, toolTip: '3' }, 
      { name:'stopper-4', hotKey: KeyboardKey.FOUR, toolTip: '4' }, 
      { name:'stopper-5', hotKey: KeyboardKey.FIVE, toolTip: '5' }, 
      { name:'stopper-6', hotKey: KeyboardKey.SIX, toolTip: '6' }, 
      { name:'stopper-7', hotKey: KeyboardKey.SEVEN, toolTip: '7' }, 
      { name:'stopper-8', quantity: 6, hotKey: KeyboardKey.EIGHT, toolTip: '8' }, 
      { name:'stopper-9', quantity: -1, hotKey: KeyboardKey.NINE, toolTip: '9' }, 
      { name:'delete', quantity: -1, hotKey: KeyboardKey.ZERO, toolTip: '0' }, 
    ];
    this.toolBar = new ToolBar(new Point(20, 20));
    this.map = new GameMap(12,5);
    this.map.createMap();
    for(let i = 0; i < tools.length; i++) {
      let name = tools[i].name;
      let hotKey = tools[i].hotKey;
      let toolTip = tools[i].toolTip;
      let quantity = tools[i].quantity ? tools[i].quantity : 0;
      let tool = new Tool(name, { hotKey, toolTip }, quantity);
      this.toolBar.addTool(tool);
      keyboard.registerKey(hotKey);
    }
  }

  update(timestep) {
    this.toolBar.update();
    this.map.update();
    let selectedToolGameText = 'Selected Tool: (None)';
    let selectedTileGameText = 'Selected Tile: (None)';

    let selectedTool = this.toolBar.getSelectedTool();
    let selectedTile = this.map.getSelectedTile();
    if(selectedTool !== undefined) {
      selectedToolGameText = `Selected Tool: ${selectedTool.toolTip}-${selectedTool.name}`;
    } 
    if(selectedTile !== undefined) {
      selectedTileGameText = `Selected Tile: ${this.map.selectedIndex}`;
      if(selectedTool !== undefined && (selectedTool.quantity > 0 || selectedTool.isInfinite)) {
        selectedTile.tileText = selectedTool.toolTip;
        if(!selectedTool.isInfinite) {
          selectedTool.quantity -= 1;
        }
      }
    } 
    this.selectedToolText.text = selectedToolGameText;
    this.selectedTileText.text = selectedTileGameText;
    this.mousePositionText.text = `Mouse: (${this.mouse.x}, ${this.mouse.y})`;
    this.map.unselectTile();
  }

  draw(timestep) {
    this.toolBar.draw();
    this.map.draw();

    this.mousePositionText.draw();
    this.selectedToolText.draw();
    this.selectedTileText.draw();

    this.lightSourceBuilding.draw();
  }
} export default MirrorsEdgeScene;
