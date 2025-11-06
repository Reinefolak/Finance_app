class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 0 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          height: 4rem;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          color: #EC4899;
          font-weight: bold;
          font-size: 1.25rem;
          text-decoration: none;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        .nav-links {
          display: none;
        }
        .nav-links a {
          color: #4B5563;
          padding: 0.75rem 1rem;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #EC4899;
        }
        .nav-links a.active {
          color: #EC4899;
          font-weight: 600;
        }
        .settings-btn {
          color: #4B5563;
          padding: 0.5rem;
          transition: color 0.2s;
        }
        .settings-btn:hover {
          color: #EC4899;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 0.5rem;
          }
        }
      </style>
      <nav>
        <div class="container">
          <a href="index.html" class="logo">
            <i data-feather="dollar-sign" class="logo-icon"></i>
            FinanciFolio
          </a>
          <div class="nav-links">
            <a href="index.html">Accueil</a>
            <a href="montant.html" class="active">Montants</a>
            <a href="depenses.html">Dépenses</a>
            <a href="achats.html">Achats</a>
            <a href="rapports.html">Rapports</a>
          </div>
          <button class="settings-btn">
            <i data-feather="settings"></i>
          </button>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
