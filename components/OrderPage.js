export class OrderPage extends HTMLElement {
  constructor() {
    super();
  }

}

// Define the new element in the customElements registry using the customElements.define() method
customElements.define('order-page', OrderPage);