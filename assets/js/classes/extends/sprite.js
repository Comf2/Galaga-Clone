class Sprite {
  //gets the image, the sprite width and height, the sprites x, and y, and the canvas x, and y
  constructor(image, sWidth, sHeight, x, y) {
    this.image = image;
    this.width = sWidth;
    this.height = sHeight;
    this.positions = {
      x: x,
      y: y,
    };
  }
  draw(frameX, frameY) {
    // c.drawImage(
    //   this.image,
    //   //will draw frame we're at on sprite sheet,
    //   this.width * frameX,
    //   this.height * frameY,
    //   this.width,
    //   this.height,
    //   this.positions.x, //where to draw on canvas
    //   this.positions.y,
    //   this.scaledWidth, //size
    //   this.scaledHeight
    // );
    c.drawImage(
      this.image,
      this.width * frameX,
      this.height * frameY,
      this.width,
      this.height,
      this.positions.x,
      this.positions.y,
      this.width,
      this.height
    );
  }
}
