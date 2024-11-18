/**
 * SpongeCase web component
 * cOrReCtnG aN oVeRsIgHt In HtMl
 */

export class SpongeCase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = this.innerHTML.split("").map((char, i) => {
      return i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join("");
  }
}

if("customElements" in window) {
  window.customElements.define("sponge-case", SpongeCase);
}
