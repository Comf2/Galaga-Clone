class Sprite {
  //gets the image, the sprite width and height, the sprites x, and y, and the canvas x, and y
  constructor(image, sWidth, sHeight, x, y, frameX, frameY) {
    this.image = image;
    this.width = sWidth;
    this.height = sHeight;
    this.positions = {
      x: x,
      y: y,
    };

    this.frames = {
      x: frameX,
      y: frameY,
    };
    this.sides = {
      top: this.positions.y,
      bottom: this.positions.y + this.height,
      left: this.positions.x,
      right: this.positions.x + this.width,
    };
  }
  draw() {
    c.drawImage(
      this.image,
      this.width * this.frames.x,
      this.height * this.frames.y,
      this.width,
      this.height,
      this.positions.x,
      this.positions.y,
      this.width,
      this.height
    );
  }
  UpdateSides() {
    this.sides.top = this.positions.y;
    this.sides.bottom = this.positions.y + this.height;
    this.sides.left = this.positions.x;
    this.sides.right = this.positions.x + this.width;
  }
}
