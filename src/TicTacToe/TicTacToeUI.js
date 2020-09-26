import TicTacToe from "./TicTacToe";
import GridTemplate from './templates/Grid';

class TicTacToeUI extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(GridTemplate.content.cloneNode(true));

    this.game = new TicTacToe(3);

    let cellsTemplate = '';
    for (let row=0; row<this.game.grid.length; row++) {
        for(let col=0; col<this.game.grid[row].length; col++) {
            cellsTemplate += `<div class="cell" data-id="${row},${col}"></div>`;
        }
    }
    this.gamegrid = this.shadowRoot.querySelector("#gamegrid");
    this.gamestate = this.shadowRoot.querySelector("#gamestate");
    this.gamegrid.innerHTML = cellsTemplate;
    this.gamegrid.addEventListener('click', this.onGridClick.bind(this));
    this.player = 0;
  }

  onGridClick(event) {
    event.preventDefault();
    const [row, col] = event.target.getAttribute('data-id').split(',');

    const cell = event.target;
    const winner = this.game.move(this.player, row, col);
    if (winner) {
        this.gamestate.innerHTML = `${this.player} wins!`;
    }
    cell.innerHTML = this.player;
    this.player = this.player === 0 ? 1 : 0;
  }

}

customElements.define("tic-tac-toe", TicTacToeUI);
