class Snake {
  constructor(length, tiles) {
    this.tiles = tiles;
    this.length = length;
    this.direction = 'right';
    this.start = [];
    this.body = [];
    this.generateSnake();
  }

  generateSnake() {
    var startIndex = this.tiles.length / 2 + Math.round(Math.sqrt(this.tiles.length) / 2);
    for (var i = 0; i < this.length; i++) {
      this.tiles[startIndex - i].setSnake();
    }
  }
}
