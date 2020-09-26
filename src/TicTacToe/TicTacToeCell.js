import CellTemplate from './templates/Cell';

class TicTacToeCell extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(CellTemplate.content.cloneNode(true));
  }
  get row() {
      return this.attribute()
  }
}

customElements.define("tic-tac-toe-cell", TicTacToeCell);