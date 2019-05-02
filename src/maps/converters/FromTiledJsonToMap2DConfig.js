function FromTiledJsonToMap2DConfig(json) {
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
    tilesets: json.tilesets.amp(tileset => {
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

export default FromTiledJsonToMap2DConfig;