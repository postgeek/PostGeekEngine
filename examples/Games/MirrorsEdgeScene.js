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
import Mirror from './MirrorsEdge/gameObjects/buildings/Mirror';
import Goal from './MirrorsEdge/gameObjects/buildings/Goal';

class MirrorsEdgeScene extends Scene {

  create() {
    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.mouse = ServiceLocator.instance.locate('mouse');

    this.keyboard.registerKey(KeyboardKey.R);

    this.lightSource = new LightSource(new Point(850, 100));
    this.goalBuilding = new Goal(new Point(990, 100));
    this.mirror = new Mirror(new Point(920, 100));


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
      { name: 'light-source', quantity: 4, hotKey: KeyboardKey.ONE, toolTip: '1', building: new LightSource(new Point(0,0))}, 
      { name: 'mirror', quantity: 5, hotKey: KeyboardKey.TWO, toolTip: '2', building: new Mirror(new Point(0,0))}, 
      { name:'stopper', hotKey: KeyboardKey.THREE, toolTip: '3' }, 
      { name:'stopper-4', hotKey: KeyboardKey.FOUR, toolTip: '4' }, 
      { name:'stopper-5', hotKey: KeyboardKey.FIVE, toolTip: '5' }, 
      { name:'stopper-6', hotKey: KeyboardKey.SIX, toolTip: '6' }, 
      { name:'stopper-7', hotKey: KeyboardKey.SEVEN, toolTip: '7' }, 
      { name:'stopper-8', hotKey: KeyboardKey.EIGHT, toolTip: '8' }, 
      { name:'stopper-9', hotKey: KeyboardKey.NINE, toolTip: '9' }, 
      { name:'delete', quantity: -1, hotKey: KeyboardKey.ZERO, toolTip: '0' }, 
    ];
    this.toolBar = new ToolBar(new Point(20, 20));
    this.map = new GameMap(12,6);
    this.map.createMap();
    this.map.setGoalAt(new Point(9, 2));
    var goalTile = this.map.getTileAt(9, 2);
    goalTile.building = new Goal(goalTile.point.clone());
    for(let i = 0; i < tools.length; i++) {
      let name = tools[i].name;
      let hotKey = tools[i].hotKey;
      let toolTip = tools[i].toolTip;
      let quantity = tools[i].quantity ? tools[i].quantity : 0;
      let building = tools[i].building ? tools[i].building : undefined;
      let tool = new Tool(name, { hotKey, toolTip }, quantity, building);
      this.toolBar.addTool(tool);
      this.keyboard.registerKey(hotKey);
    }
  }

  lightTiles(selectedTool, tileBuilding) {
    if(selectedTool.toolTip === '1') {
      const rotationDirection = tileBuilding.rotation / 90;

      const tileX = this.map.selectedIndex % this.map.width;
      const tileY = Math.floor(this.map.selectedIndex / this.map.width);

      if(rotationDirection === 0) {
        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;
        for(let y = tileY - 1; y >= 0; y--) {
          const colorTile = this.map.getTileAt(tileX, y);
          if(!colorTile.isOccupied()) {
            this.map.getTileAt(tileX, y).color = color;
          } else if(this.tileHasMirror(colorTile)) {
            var mirrorRotation = colorTile.building.rotation / 90;
            console.log(`there is a mirror there ${mirrorRotation}`);
            // 1, 2
            if(mirrorRotation === 1) {
              // up -> right
              for(let x = tileX + 1; x < this.map.width; x++) {
                const newColorTile = this.map.getTileAt(x, y);
                if(!newColorTile.isOccupied()) {
                  this.map.getTileAt(x, y).color = color;
                } else {
                  break;
                }
              }
              break;
            }
            if(mirrorRotation === 2) {
              // up -> left
              for(let x = tileX - 1; x >= 0; x--) {
                const newColorTile = this.map.getTileAt(x, y);
                if(!newColorTile.isOccupied()) {
                  this.map.getTileAt(x, y).color = color;
                } else {
                  break;
                }
              }
              break;
            }
          } else {
            break;
          }
        }
      }
      if(rotationDirection === 1) {
        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;
        for(let x = tileX + 1; x < this.map.width; x++) {
          const colorTile = this.map.getTileAt(x, tileY);
          if(!colorTile.isOccupied()) {
            this.map.getTileAt(x, tileY).color = color;
          } else if(this.tileHasMirror(colorTile)) {
            var mirrorRotation = colorTile.building.rotation / 90;
            console.log(`there is a mirror there ${mirrorRotation}`);
            // 2, 3
          } else {
            break;
          }
        }
      }
      if(rotationDirection === 2) {
        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;
        for(let y = tileY + 1; y < this.map.height; y++) {
          const colorTile = this.map.getTileAt(tileX, y);
          if(!colorTile.isOccupied()) {
            colorTile.color = color;
          } else if(this.tileHasMirror(colorTile)) {
            var mirrorRotation = colorTile.building.rotation / 90;
            console.log(`there is a mirror there ${mirrorRotation}`);
            // 0, 3
          } else {
            break;
          }
        }
      }
      if(rotationDirection === 3) {
        var color = Color.AQUAMARINE.hslaColor;
        color.alpha = 0.8;
        for(let x = tileX - 1; x >= 0; x--) {
          const colorTile = this.map.getTileAt(x, tileY);
          if(!colorTile.isOccupied()) {
            colorTile.color = color;
          } else if(this.tileHasMirror(colorTile)) {
            var mirrorRotation = colorTile.building.rotation / 90;
            console.log(`there is a mirror there ${mirrorRotation}`);
            // 1 0
          } else {
            break;
          }
        }
      }
    }
  }

  tileHasMirror(tile) {
    if(tile !== undefined) {
      return tile.building.constructor.name === "Mirror";
    }
    return false;
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
        var tileBuilding = selectedTool.toolBuilding;
        if(tileBuilding !== undefined) {
          tileBuilding = tileBuilding.clone();
          tileBuilding.setRotation(selectedTool.toolBuilding.rotation);
          tileBuilding.point = selectedTile.point.clone();
          this.lightTiles(selectedTool, tileBuilding);
        }
        selectedTile.building = tileBuilding;
        if(!selectedTool.isInfinite) {
          selectedTool.quantity -= 1;
        }
      }
    } 
    if(this.keyboard.keyDownOnce(KeyboardKey.R)) {
      let selectedTool = this.toolBar.getSelectedTool();
      if(selectedTool !== undefined) {
        selectedTool.toolBuilding.rotate()
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

    this.lightSource.draw();
    this.goalBuilding.draw();
    this.mirror.draw();
  }
} export default MirrorsEdgeScene;
