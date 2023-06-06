let gamePlaying = false;

//run animation class in player
//when its over change bool

//TODO: Make a level class, and initting level functionality
//make initial animation connected to level class
//make a level manager
const playerDims = {
  width: 64,
  height: 61,
};
const gameStartPos = {
  x: window.innerWidth / 2 - playerDims.width / 2,
  y: window.innerHeight - 100,
};
const player = new Sprite(
  playerImage,
  playerDims.width,
  playerDims.height,
  gameStartPos.x,
  gameStartPos.y + 120
);

const playStartAnim = () => {
  if (player.positions.y === window.innerHeight - 100) gamePlaying = true;
  player.positions.y--;
  console.log('hello');
};

const PlayGame = () => {
  player.draw(0, 0);

  if (!gamePlaying) {
    playStartAnim();
    return;
  }
};

const StartGame = () => {
  //run start game animation
  let gamePlaying = false;
};
