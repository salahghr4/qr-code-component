// Create a class for the element
class QrCode extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // create the internal implementation
    const article = document.createElement("article");
    article.setAttribute("class", "card");

    const img = document.createElement("img");

    img.setAttribute("src", this.getAttribute("data-img"));
    img.setAttribute("class", "card_img");
    img.setAttribute("alt", "QR Code");
    img.setAttribute("width", "288px");
    img.setAttribute("height", "288px");

    img.src = this.getAttribute("data-img");

    const title = document.createElement("h1");
    title.setAttribute("class", "card_title");
    title.textContent = this.getAttribute("data-title");

    const text = document.createElement("p");
    text.setAttribute("class", "card_text");
    text.textContent = this.getAttribute("data-description");

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    style.textContent = `
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .card {   
        max-width: 320px;
        background-color: var(--White);
        padding: 16px;
        text-align: center;
        border-radius: 2rem;
        box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.05);
      }

      .card_img {
        display: block;
        max-width: 100%;
        border-radius: 1rem;
      }
      .card_title {
        font-size: 2.2rem;
        margin-top: 2.2rem;
        margin-bottom: 0;
        color: var(--Dark-blue);
      }

      .card_text {
        margin: 1.5rem;
        margin-bottom: 2.5rem;
        color: var(--Grayish-blue);
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(article);

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(text);
  }
}

customElements.define("qr-code", QrCode);