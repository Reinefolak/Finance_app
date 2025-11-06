class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          border-top: 1px solid #E5E7EB;
          padding: 2rem 1rem;
          font-family: 'Poppins', sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          color: #6B7280;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="container">
          <p>&copy; 2023 FinanciFolio. Tous droits réservés.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
