import './style.css';
import { Chessground } from 'chessground';
import { Chess } from 'chess.js';

document.querySelector('#app').innerHTML = `
  <main class="game-container">
    <div id="board"></div>
  </main>
`;

const game = new Chess();
const boardElement = document.getElementById('board');

function getLegalMoves(chess) {
  const dests = new Map();
  chess.moves({ verbose: true }).forEach((m) => {
    if (!dests.has(m.from)) dests.set(m.from, []);
    dests.get(m.from).push(m.to);
  });
  return dests;
}

const ground = Chessground(boardElement, {
  fen: game.fen(),
  turnColor: 'white',
  movable: {
    free: false,
    color: 'white',
    dests: getLegalMoves(game),
    events: {
      after: (orig, dest) => {
        game.move({ from: orig, to: dest, promotion: 'q' });
        playBotMove();
      }
    }
  }
});

async function playBotMove() {
  if (game.isGameOver()) {
    alert('Fin de la partida');
    return;
  }

  const moves = game.moves({ verbose: true });
  const move = moves[Math.floor(Math.random() * moves.length)];
  game.move(move);

  ground.set({
    fen: game.fen(),
    turnColor: 'white',
    movable: {
      color: 'white',
      dests: getLegalMoves(game)
    },
    lastMove: [move.from, move.to]
  });

  if (game.isGameOver()) {
    alert('Fin de la partida');
  }
}
