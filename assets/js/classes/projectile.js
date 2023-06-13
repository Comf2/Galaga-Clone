class Projectile extends Sprite {
  constructor(
    image,
    sWidth,
    sHeight,
    x,
    y,
    startPos,
    endPos,
    moveCount,
    target
  ) {
    super(image, sWidth, sHeight, x, y);
    this.isFiring = true;
    this.startPos = {
      x: startPos.x,
      y: startPos.y,
    };
    this.endPos = {
      x: endPos.x,
      y: endPos.y,
    };
    this.speed = {
      x: 0,
      y: 0,
    };
    this.moveCount = moveCount;
    this.target = target;
  }
  Fire() {
    if (!this.isFiring) return;

    if (this.speed.x === 0 && this.speed.y === 0) {
      const initSpeed = this.GetSpeed(this.startPos, this.endPos);
      this.speed.x = initSpeed.x;
      this.speed.y = initSpeed.y;
    }
    const firePos = this.ChangePos();
    const offScreen = this.CheckOffScreen(firePos);
    if (offScreen) return;
    const hit = this.Hit(firePos);
    if (hit.didHit === true) {
      this.isFiring = false;
      hit.enemy.damage(10);
      return;
    }

    this.startPos.x = firePos.x;
    this.startPos.y = firePos.y;
    this.positions.x = firePos.x;
    this.positions.y = firePos.y;
    this.UpdateSides();

    this.drawProjectile(firePos);

    requestAnimationFrame(this.Fire.bind(this));
  }
  CheckOffScreen(firePos) {
    if (
      firePos.y <= 0 ||
      firePos.y >= window.innerHeight ||
      firePos.x <= 0 ||
      firePos.x >= window.innerWidth
    ) {
      this.isFiring = false;
      console.log('this is such a thing that exists omg');
      return true;
    }
    return false;
  }
  GetSpeed(s, e) {
    const dp = {
      y: s.y - e.y,
      x: s.x - e.x,
    };
    const fp = {
      y: dp.y / this.moveCount,
      x: dp.x / this.moveCount,
    };
    return fp;
  }
  ChangePos() {
    const np = {
      y: this.startPos.y - this.speed.y,
      x: this.startPos.x - this.speed.x,
    };
    return np;
  }
  GetFirePos(s, e) {
    //do formula to get new value
    //update positions.x
    const dp = {
      y: s.y - e.y,
      x: s.x - e.x,
    };
    const fp = {
      y: dp.y / this.moveCount,
      x: dp.x / this.moveCount,
    };
    const np = {
      y: s.y - fp.y,
      x: s.x - fp.x,
    };
    console.log('nth pos >>', np);
    return np;
  }
  Hit(firePos) {
    let didHit;
    if (this.target === 'enemy') {
      didHit = this.CheckEnemyHit(firePos);
    } else {
      didHit = this.checkPlayerHit(firePos);
    }
    //loop through and check collision
    //return after
    return {
      enemy: null,
      didHit: false,
    };
  }
  CheckEnemyHit(firePos) {
    level.enemies.forEach((enemy) => {
      if (
        enemy.sides.right <= this.sides.left &&
        enemy.sides.bottom <= this.sides.bottom
      ) {
        console.log('collided!');
      } else if (
        enemy.sides.top <= this.sides.bottom &&
        enemy.sides.bottom >= this.sides.top &&
        enemy.sides.right >= this.sides.left &&
        enemy.sides.left <= this.sides.right
      ) {
        console.log('what do you call a fish with no is');
      } else {
        console.log('no hit ');
      }
    });
    return 'it hit thing';
  }
  checkPlayerHit() {
    FirePos;
  }
  drawProjectile(firePos) {
    c.drawImage(
      playerPrjImg,
      firePos.x,
      firePos.y,
      dims.projectile.width,
      dims.projectile.height
    );
  }
}
