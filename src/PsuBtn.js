import { html, css, LitElement } from 'lit';

export class PsuBtn extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        --psu-btn-text-color: orange;
      }
      :host([id="cool"]),
      :host([invert]) {
        background-color: blue;
        color: black;
        margin: 100px;
      }
      button:focus,
      button:hover {
        background-color: green;
        color: yellow;
      }
      a:disabled {

      }
      a {
        box-shadow: 0px 0px 0px 2px #9fb4f2;
        background:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);
        background-color:#7892c2;
        border-radius:10px;
        border:1px solid #4e6096;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:19px;
        padding:12px 37px;
        text-decoration:none;
        text-shadow:0px 1px 0px #283966;
      }
      a {
        color: var(--psu-btn-text-color);
      }
      a:hover {
        background:linear-gradient(to bottom, #476e9e 5%, #7892c2 100%);
        background-color:#476e9e;
      }
      a:active {
        position:relative;
        top:1px;
      }
      button {
        color: var(--psu-btn-text-color);
        background-color: transparent;
    display: block;
    border: none;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Penn State';
    this.link = "https://psu.edu/";
  }

  render() {
    return html`
      <a href="${this.link}" tabindex="-1"><button>${this.title}<slot></slot></button></a>
    `;
  }
}
