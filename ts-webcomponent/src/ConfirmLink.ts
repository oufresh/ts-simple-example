export class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    console.log("ConfirmLink connected");
    this.addEventListener("click", (e) => {
      const result = confirm(`Are you sure you want to go to '${this.href}'?`);
      if (!result) e.preventDefault();
    });
  }
}

customElements.define("confirm-link", ConfirmLink, { extends: "a" });
