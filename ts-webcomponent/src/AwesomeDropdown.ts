import "./AwesomeButton";

const DropDownTemplate = document.createElement("template");
DropDownTemplate.innerHTML = `
  <style>
    :host {
      font-family: sans-serif;
    }
    .dropdown {
      padding: 3px 8px 8px;
    }
    .dropdown.open .dropdown-list {
        display: flex;
        flex-direction: column;
      }
    .label {
      display: block;
      margin-bottom: 5px;
      color: #000000;
      font-size: 16px;
      font-weight: normal;
      line-height: 16px;
    }
    .dropdown-list-container {
      position: relative;
    }
    .dropdown-list {
      position: absolute;
      width: 100%;
      display: none;
      max-height: 192px;
      overflow-y: auto;
      margin: 4px 0 0;
      padding: 0;
      background-color: #ffffff;
      border: 1px solid #a1a1a1;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      list-style: none;
    }
    .dropdown-list li {
      display: flex;
      align-items: center;
      margin: 4px 0;
      padding: 0 7px;
      font-size: 16px;
      height: 40px;
      cursor: pointer;
    }
    .dropdown-list li:hover {
        background-color: #f0f0f0;
        cursor: pointer;
      }
    .dropdown-list li.selected {
        font-weight: 600;
        background-color: #f0f0f0;
      }
  </style>
  <div class="dropdown">
    <span class="label">Label</span>
    <awesome-button as-atom>Content</awesome-button>
    <div class="dropdown-list-container">
      <ul class="dropdown-list"></ul>
    </div>
  </div>
`;
export class Dropdown extends HTMLElement {
  _button: HTMLButtonElement | null;
  _label: HTMLSpanElement | null;
  _dropdownList: HTMLDivElement | null;
  _dropdown: HTMLDivElement | null;
  open: boolean;
  constructor() {
    super();
    this.open = false;
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(DropDownTemplate.content.cloneNode(true));
      this._label = this.shadowRoot.querySelector(".label");
      this._button = this.shadowRoot.querySelector("awesome-button");
      this._dropdownList = this.shadowRoot.querySelector(".dropdown-list");
      this._dropdown = this.shadowRoot.querySelector(".dropdown");
    } else {
      this._button = null;
      this._label = null;
      this._dropdownList = null;
      this._dropdown = null;
    }
  }
  get label() {
    return this.getAttribute("label");
  }
  set label(value: string | null) {
    if (value) this.setAttribute("label", value);
  }
  get option() {
    return this.getAttribute("option");
  }
  set option(value: string | null) {
    if (value) this.setAttribute("option", value);
  }
  get options(): any {
    const opts = this.getAttribute("options");
    if (opts) return JSON.parse(opts);
    else return {};
  }
  set options(value) {
    this.setAttribute("options", JSON.stringify(value));
  }
  toggleOpen() {
    this.open = !this.open;
    if (this._dropdown)
      this.open
        ? this._dropdown.classList.add("open")
        : this._dropdown.classList.remove("open");
  }

  connectedCallback() {
    if (this._button)
      this._button.addEventListener("onClick", this.toggleOpen.bind(this));
  }

  static get observedAttributes() {
    return ["label", "option", "options"];
  }
  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    this.render();
  }
  render() {
    if (this._label) this._label.innerHTML = this.label ? this.label : "";

    if (this.options) {
      if (this._button)
        if (this.option)
          this._button.setAttribute("label", this.options[this.option].label);
    }
    if (this._button) this._button.setAttribute("label", "Select Option");
    if (this._dropdownList) {
      this._dropdownList.innerHTML = "";
      Object.keys(this.options || {}).forEach((key) => {
        let option = this.options[key];
        let $option = document.createElement("li");
        $option.innerHTML = option.label;
        if (this.option && this.option === key) {
          $option.classList.add("selected");
        }
        $option.addEventListener("click", () => {
          this.option = key;
          this.toggleOpen();
          this.dispatchEvent(new CustomEvent("onChange", { detail: key }));
          this.render();
        });
        if (this._dropdownList) this._dropdownList.appendChild($option);
      });
    }
  }
}
window.customElements.define("awesome-dropdown", Dropdown);
