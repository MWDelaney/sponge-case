/**
 * SpongeCase web component
 * cOrReCtnG aN oVeRsIgHt In HtMl
 */

export class SpongeCase extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Get the original content of this element
    const originalText = this.innerHTML;

    // Set this element's aria-label to the original content
    this.setAttribute("aria-label", originalText);

    // Sponge-case the innerHTML
    this.innerHTML = this.innerHTML.split("").map((char, i) => {
      return i % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }).join("");
  }
}

if("customElements" in window) {
  window.customElements.define("sponge-case", SpongeCase);
}
