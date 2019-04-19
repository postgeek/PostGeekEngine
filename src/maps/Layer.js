class Layer {
  constructor(map, config) {
    this.Map = map;
    this.Id = config.id;
    this.Name = config.name;
    this.Data = config.data;
  }
}

export default Layer;