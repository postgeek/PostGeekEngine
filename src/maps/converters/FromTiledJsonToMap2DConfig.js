function FromTiledJsonToMap2DConfig(json, tilesetImg) {
  let config = {
    rowCount: json.height,
    columnCount: json.width,
    tileHeight: json.tileheight,
    tileWidth: json.tilewidth,
    layers: json.layers.map(layer => { 
      return {
        id: layer.id,
        name: layer.name,
        data : layer.data
      };
    }),
    tilesets: json.tilesets.map(tileset => {
      return {
        columnCount: tileset.columns,
        firstGid: tileset.firstgid,
        imagePath: tileset.image,
        imageHeight: tileset.imageheight,
        imageWidth: tileset.imagewidth,
        name: tileset.name,
        tileCount: tileset.tilecount,
        tileHeight: tileset.tileheight,
        tileWidth: tileset.tilewidth
      };
    })
  };

  return config;
}

function parseTileSetImg() {
  
}

export default FromTiledJsonToMap2DConfig;