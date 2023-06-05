class Sprite {
  constructor(width, height, x, y, image) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = image;
  }
  draw() {
    c.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
