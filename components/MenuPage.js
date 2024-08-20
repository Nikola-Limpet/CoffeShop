export class MenuPage extends HTMLElement {
    constructor() {
      super();
      // Create a shadow root
      // A shadow root is a part of the custom element that is not accessible from the outside
      this.attachShadow({ mode: 'open' });

      const styles = document.createElement('style');
      this.shadowRoot.appendChild(styles);


      async function loadCSS () {
        const req = await fetch('components/MenuPage.css');
        const text = await req.text(); // returns a promise of the response body as text
        styles.textContent = text; 
        // The textContent property sets or returns the text content of the specified node, and all its descendants.
      }
      loadCSS();

    }
    // The connectedCallback() method is called when the custom element is added to the DOM
    // when the component is attached to the DOM
    connectedCallback() {
      // Create a new template element
      // Clone the template's content and append it to the shadow root of the custom element
      // The shadow root is a part of the custom element that is not accessible from the outside
      const template = document.getElementById('menu-page-template');
      const templateContent = template.content.cloneNode(true);
      this.shadowRoot.appendChild(templateContent);

    }
}

// Define the new element in the customElements registry using the customElements.define() method
customElements.define('menu-page', MenuPage);