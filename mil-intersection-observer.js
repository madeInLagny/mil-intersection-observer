import { LitElement, html, css } from "lit-element";

export class milIntersectionObserver extends LitElement {
  static get properties() {
    return {
      thresholds: { type: Array },
      rootMargin: { type: String }
    };
  }

  render() {
    return html`
      <div id="slottedData">
        <slot></slot>
      </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    this.observer = new IntersectionObserver(
      this.handleIntersectionCallback.bind(this),
      {
        root: document.rootElement,
        rootMargin: this.rootMargin || "0px",
        threshold: this.thresholds || [0.0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    this.observer.observe(this.shadowRoot.querySelector("#slottedData"));
  }
  handleIntersectionCallback(entries) {
    for (let entry of entries) {
      this._setIntersect(entry);
    }
  }

  _setIntersect(entry) {
    let event = new CustomEvent("intersect", {
      detail: {
        isIntersecting: entry.isIntersecting,
        intersectionRatio: Number(entry.intersectionRatio).toFixed(2) || "0.00"
      }
    });
    this.dispatchEvent(event);
  }
}

customElements.define("mil-intersection-observer", milIntersectionObserver);
