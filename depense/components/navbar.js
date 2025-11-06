class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .logo {
          display: flex;
          align-items: center;
          color: #d946ef;
          font-weight: bold;
          font-size: 1.25rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        a {
          color: #4b5563;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: color 0.2s;
        }
        a:hover, a.active {
          color: #d946ef;
        }
        .icon {
          width: 1.5rem;
          height: 1.5rem;
        }
      </style>
      <nav>
        <div class="logo">
          <i data-feather="dollar-sign" class="icon mr-2"></i>
          <span>FinanciFolio</span>
        </div>
        <div class="nav-links">
          <a href="index.html">Accueil</a>
          <a href="montant.html">Montants</a>
          <a href="depenses.html" class="active">Dépenses</a>
          <a href="achats.html">Achats</a>
          <a href="rapports.html">Rapports</a>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
