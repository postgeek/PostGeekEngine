import Tile from "./Tile";
import Point from 'core/Point';
import MouseButton from 'inputEngine/MouseButton';
import ServiceLocator from 'core/ServiceLocator';

class GameMap {

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.tileSize = 64;
        this.tiles = [];
        this.mouse = ServiceLocator.instance.locate('mouse');
    }

    getSelectedTile() {
        if(this.selectedIndex !== undefined) {
            return this.tiles[this.selectedIndex];
        } 
        return undefined;
    }

    getTileAt(x, y) {
        const index = x + y * this.width;
        return this.tiles[index];
    }

    createMap() {
        for(let i = 0; i < this.width * this.height; i++) {
            let xPosition = i % this.width * this.tileSize + 20;
            let yPosition = Math.floor(i / this.width) * this.tileSize + 100;
            let position = new Point(xPosition, yPosition);

            var tile = new Tile(position, this.tileSize, this.tileSize);
            this.tiles.push(tile);
        }
    }

    draw() {
        this.tiles.forEach(function(tile) {
            tile.tileGraphic.draw();
            tile.tileText.draw();
        });
    }

    update() {
        if (this.mouse.buttonDownOnce(MouseButton.LEFT_BUTTON)) {
            this.tiles.forEach(function(tile, index) {
                let x = this.mouse.x;
                let y = this.mouse.y;
                let x1 = tile.point.x;
                let x2 = tile.size + tile.point.x;
                let y1 = tile.point.y;
                let y2 = tile.size + tile.point.y;

                if(x >= x1 && x <= x2 && y >= y1 && y <= y2) {
                    this.selectTile(tile, index);
                }
            }.bind(this));
        }
    }

    selectTile(tile, index) {
        if(this.selectedIndex !== index) {
            // Deselect previous tool
            if(this.selectedIndex !== undefined) {
                this.tiles[this.selectedIndex].tileGraphic.geometryStyle = tile.defaultTileStyle;
            }

            // Select new tool
            this.selectedIndex = index;
            tile.tileGraphic.geometryStyle = tile.selectedTileStyle;
        }
    }

    unselectTile() {
        if(this.selectedIndex !== undefined) {
            this.tiles[this.selectedIndex].tileGraphic.geometryStyle = this.tiles[this.selectedIndex].defaultTileStyle;
        }
        this.selectedIndex = undefined;
    }
} export default GameMap;