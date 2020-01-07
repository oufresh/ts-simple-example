// Create an ES6 class which extends HTMLElement
export class AwesomeCardComponent extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = this.greeting ? this.greeting : "";
  }

  get greeting() {
    return this.getAttribute("greeting");
  }

  set greeting(val) {
    if (val) {
      this.setAttribute("greeting", val);
    } else {
      this.removeAttribute("greeting");
    }
  }
}

// Register our awesome card component to the Custom Elements Registry
customElements.define("awesome-card", AwesomeCardComponent);
