let state = 'StartScreen';
let currentLevel = 0;
function updateLevel(currentLevel) {
  currentLevel++;
  console.log(currentLevel);
}

const startScreen = document.querySelector('.start-screen');
function CheckState() {
  switch (state) {
    case 'startScreen':
      console.log('start screen');
      break;
    case 'game':
      startScreen.style.display = 'none';
      PlayGame();
      break;
  }
}
