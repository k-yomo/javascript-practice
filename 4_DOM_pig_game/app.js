/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a  as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundscores, winningScore, activePlayer, gamePlaying, lastDice1, lastDice2;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {
    var dice1 = Math.ceil(Math.random() * 6);
    var dice2 = Math.ceil(Math.random() * 6);
    var diceDOM1 = document.querySelector('.dice1');
    var diceDOM2 = document.querySelector('.dice2');
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-" + dice1 + ".png";
    diceDOM2.style.display = "block";
    diceDOM2.src = "dice-" + dice2 + ".png";
    if ((lastDice1 === 6 && dice1 === 6) || (lastDice2 === 6 && dice2 === 6)) {
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      nextPlayer();
    } else if (dice1 !== 1 && dice2 !== 1) {
      roundScore += dice1 + dice2;
      lastDice1 = dice1;
      lastDice2 = dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  }

  if (scores[activePlayer] >= winningScore) {
    document.getElementById('name-' + activePlayer).textContent = "Winner";
    document.querySelector('.dice1').style.display = "none";
    document.querySelector('.dice2').style.display = "none";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  lastDice1 = 0;
  lastDice2 = 0;
  document.getElementById('current-0').textContent = "0";
  document.getElementById('current-1').textContent = "0";
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice1').style.display = "none";
  document.querySelector('.dice2').style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  lastDice1 = 0;
  lastDice2 = 0;
  winningScore = document.getElementById('winning-score').value;

  document.querySelector('.dice1').style.display = "none";
    document.querySelector('.dice2').style.display = "none";

  for(var i = 0; i < 2; i++) {
    document.getElementById('score-' + i).textContent = "0";
    document.getElementById('current-' + i).textContent = "0";
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

  }
}
