class Character extends Sprite {
  constructor(image, sWidth, sHeight, x, y, frameX, frameY, dir) {
    super(image, sWidth, sHeight, x, y, frameX, frameY, dir);
    this.movement = {
      movingUp: false,
      movingLeft: false,
      movingDown: false,
      movingRight: false,
    };
    this.currentDir = dir;
  }
  Move() {
    if (this.movement.movingUp) {
      this.positions.y -= 5;
      this.frames.x = 1;
      this.currentDir = 'up';
    } else if (this.movement.movingRight) {
      this.positions.x += 5;
      this.frames.x = 3;
      this.currentDir = 'right';
    } else if (this.movement.movingDown) {
      this.positions.y += 5;
      this.frames.x = 2;
      this.currentDir = 'down';
    } else if (this.movement.movingLeft) {
      this.positions.x -= 5;
      this.frames.x = 0;
      this.currentDir = 'left';
    }
  }
  Fire(deg) {}
}
