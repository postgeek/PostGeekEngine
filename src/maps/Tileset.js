import Rectangle from 'graphics/geometry/Rectangle';
import GeometryStyle from 'graphics/geometry/GeometryStyle';
import Text from 'graphics/text/Text';
import TextStyle from 'graphics/text/TextStyle';
import Point from 'physics/Point';

class Tileset {
  constructor(map, config) {
    this.Map = map;
    this.ColumnCount = config.columnCount;
    this.FirstGid = config.firstGid;
    this.ImagePath = config.imagePath;
    this.ImageHeight = config.imageHeight;
    this.ImageWidth = config.imageWidth;
    this.Name = config.name;
    this.TileCount = config.tileCount;
    this.TileHeight = config.tileHeight; 
    this.TileWidth = config.tileWidth; 

    this.defaultRectStyle = new GeometryStyle({
      lineWidth: 1,
      fillStyle: 'black',
      strokeStyle: 'white',
    });

    this.defaultTextStyle = new TextStyle({
      lineWidth: 1,
      fillStyle: 'white',
      font: "10px serif"
    });
  }

  drawTile(gid, row, col) {
    const x = col * this.TileWidth;
    const y = row * this.TileHeight;

    const rect = new Rectangle(this.Map.Game.context, new Point(x, y), this.TileWidth, this.TileHeight);
    rect.GeometryStyle = this.defaultRectStyle;
    rect.draw();

    const text = new Text(this.Map.Game.context, new Point(x + 3, y + 10), gid);
    text.TextStyle = this.defaultTextStyle;
    text.draw();
  }
}

export default Tileset;