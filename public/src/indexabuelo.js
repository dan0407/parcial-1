import * as component from "./componente/indexpadre.js"
import * as data from "./data.js"
class Appconteiner extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
  
  }
  connectedCallback() {
    this.render();

  }
  static get observedAttributes(){
    render(`title`, `description`, `value`, `inStock`, `image`);

  }

  attributeChangedCallback(propName, oldVal, newVal) {
    this[propName]=newVal;
    this.render();  
  }

  render(){
    this.shadowRoot.innerHTML =`
    <h1>${ Element.title}</h1>
    <p>${Element.description}</p>
    <p>${Element.value}</p>
    <p>${Element.inStock}</p>
    <img src="image" alt="">`
     }
    }

customElements.define('App-conteiner', Appconteiner);
export default Appconteiner