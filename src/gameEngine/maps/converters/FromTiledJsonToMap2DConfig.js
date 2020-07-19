function FromTiledJsonToMap2DConfig(json, tilesetImgPath) {
  const config = {
    rowCount: json.height,
    columnCount: json.width,
    tileHeight: json.tileheight,
    tileWidth: json.tilewidth,
    layers: json.layers.map((layer) => ({
      id: layer.id,
      name: layer.name,
      data: layer.data,
    })),
    tilesets: json.tilesets.map((tileset) => ({
      columnCount: tileset.columns,
      firstGid: tileset.firstgid,
      imagePath: tilesetImgPath + tileset.image,
      imageHeight: tileset.imageheight,
      imageWidth: tileset.imagewidth,
      name: tileset.name,
      tileCount: tileset.tilecount,
      tileHeight: tileset.tileheight,
      tileWidth: tileset.tilewidth,
    })),
  };

  return config;
}

export default FromTiledJsonToMap2DConfig;
