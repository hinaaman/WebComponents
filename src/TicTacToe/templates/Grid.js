const template = document.createElement("template");
template.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-wrap: wrap;
        }
        .content {
            display: grid;
            grid-gap: 20px;
            width: fit-content;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        .cell {
            border: 1px solid gray;
            padding: 10px;
            width: 50px;
            height: 50px;
        }
      </style>
      <div class="content">
        <div id="gamegrid" class="grid">Some text</div>
        <div id="gamestate" class="grid"></div>
      </div>
    `;
export default template;