let gamePlaying = false;

//run animation class in player
//when its over change bool

//TODO: Make a level class, and initting level functionality
//make initial animation connected to level class
//make a level manager

const player = new Character(
  playerImage,
  dims.player.width,
  dims.player.height,
  gameStartPos.player.x,
  gameStartPos.player.y + 120,
  1,
  0,
  0
);
