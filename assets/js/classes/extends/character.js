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
    this.canFire = true;
  }
  Move() {
    if (this.movement.movingUp) {
      this.positions.y -= 5;
      this.frames.x = 1;
      this.currentDir = 0;
    } else if (this.movement.movingRight) {
      this.positions.x += 5;
    } else if (this.movement.movingDown) {
      this.positions.y += 5;
      this.frames.x = 2;
      this.currentDir = 180;
    } else if (this.movement.movingLeft) {
      this.positions.x -= 5;
    }
  }
  Fire(deg) {
    setTimeout(() => {
      this.canFire = true;
    }, 300);
    console.log('fire at', deg);
  }
  damage(dmg) {
    //TODO: Add health
  }
}
