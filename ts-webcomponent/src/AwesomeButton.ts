const ButtonTemplate = document.createElement("template");
ButtonTemplate.innerHTML = `
  <style>
    .container {
      
    }
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
    button:hover {
      cursor: pointer;
    }
  </style>
  <div class="container">
    <button>Label</button>
  </div>
`;
class AwesomeButton extends HTMLElement {
  _button: HTMLButtonElement | null;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(ButtonTemplate.content.cloneNode(true));
      this._button = this.shadowRoot.querySelector("button");
    } else this._button = null;
  }

  // reflect attribute to property
  get label() {
    return this.getAttribute("label");
  }

  //reflect property to attribute
  set label(value: string | null) {
    if (value) this.setAttribute("label", value);
  }

  static get observedAttributes() {
    return ["label", "onClick"];
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this.render();
  }

  onClick = () => {
    this.dispatchEvent(
      new CustomEvent("onClick", {
        detail: "Hello from within the Custom Element"
      })
    );
  };

  connectedCallback() {
    console.log("awesome-button connected");
    if (this._button) this._button.addEventListener("click", this.onClick);
  }

  disconnectedCallback() {
    console.log("awesome-button disconnected");
    if (this._button) this._button.removeEventListener("click", this.onClick);
  }

  render() {
    if (this._button) this._button.innerHTML = this.label ? this.label : "";
  }
}
window.customElements.define("awesome-button", AwesomeButton);
