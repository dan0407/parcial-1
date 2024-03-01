// <mycomponent></mycomponent>
class Mycomponent extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.
    this.attachShadow({mode: `open`});
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
    <h1>${ this.title}</h1>
    <p>${this.description}</p>
    <p>${this.value}</p>
    <p>${this.inStock}</p>
    <img src="image" alt="">`
     }
}

customElements.define('my-component', Mycomponent);
export default Mycomponent