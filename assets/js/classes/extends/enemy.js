class Enemy extends Character {
  constructor(
    image,
    sWidth,
    sHeight,
    x,
    y,
    frameX,
    frameY,
    dir,
    prjSpeed,
    fireRate,
    target,
    name
  ) {
    super(
      image,
      sWidth,
      sHeight,
      x,
      y,
      frameX,
      frameY,
      dir,
      prjSpeed,
      fireRate,
      target
    );
    this.name = name;
  }
}
