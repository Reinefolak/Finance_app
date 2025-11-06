class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          border-top: 1px solid #e5e7eb;
          padding: 3rem 1rem;
        }
        .footer-container {
          max-width: 80rem;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2rem;
        }
        .footer-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .footer-link {
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #d946ef;
        }
        .footer-bottom {
          border-top: 1px solid #e5e7eb;
          padding-top: 2rem;
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-copyright {
          color: #6b7280;
        }
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        .social-icon {
          color: #9ca3af;
          transition: color 0.2s;
        }
        .social-icon:hover {
          color: #d946ef;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div>
              <h3 class="footer-title">Navigation</h3>
              <div class="footer-links">
                <a href="index.html" class="footer-link">Accueil</a>
                <a href="montant.html" class="footer-link">Montants</a>
                <a href="depenses.html" class="footer-link">Dépenses</a>
                <a href="achats.html" class="footer-link">Achats</a>
              </div>
            </div>
            <div>
              <h3 class="footer-title">Ressources</h3>
              <div class="footer-links">
                <a href="#" class="footer-link">Aide</a>
                <a href="#" class="footer-link">Statistiques</a>
                <a href="#" class="footer-link">Exports</a>
                <a href="#" class="footer-link">Réglages</a>
              </div>
            </div>
            <div>
              <h3 class="footer-title">À propos</h3>
              <div class="footer-links">
                <a href="#" class="footer-link">Contact</a>
                <a href="#" class="footer-link">Confidentialité</a>
                <a href="#" class="footer-link">Conditions</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copyright">&copy; 2023 FinanciFolio. Tous droits réservés.</p>
            <div class="footer-social">
              <a href="#" class="social-icon"><i data-feather="github" class="icon"></i></a>
              <a href="#" class="social-icon"><i data-feather="twitter" class="icon"></i></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
