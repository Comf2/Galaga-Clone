const dims = {
  player: {
    width: 64,
    height: 61,
  },
  projectile: {
    width: 10,
    height: 10,
  },
  enemy: {
    stickbug: {
      width: 49,
      height: 61,
    },
    galaga: {
      width: 61,
      height: 65,
    },
    bee: {
      width: 41,
      height: 53,
    },
  },
};

const gameStartPos = {
  player: {
    x: window.innerWidth / 2 - dims.player.width / 2,
    y: window.innerHeight - 100,
  },
  enemy: {
    y: 100,
  },
};
