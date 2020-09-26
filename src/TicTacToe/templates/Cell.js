const template = document.createElement("template");
template.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-wrap: wrap;
        }
        .cell {
            border: 1px solid gray;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            min-height: 50px;
            min-width: 50px;
        }
        .cell:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,0.2);
        }
      </style>
      <div class="cell"></div>
    `;
export default template;