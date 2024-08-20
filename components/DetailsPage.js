export class DetailsPage extends HTMLElement {
  constructor() {
    super();
  }

}

// Define the new element in the customElements registry using the customElements.define() method
customElements.define('details-page', DetailsPage);