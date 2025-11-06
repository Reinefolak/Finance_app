class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          border-top: 1px solid #e5e7eb;
          padding: 2rem 1rem;
        }
        .footer-container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .footer-heading {
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
          gap: 0.75rem;
        }
        .footer-link {
          color: #4b5563;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: #db2777;
        }
        .footer-bottom {
          border-top: 1px solid #e5e7eb;
          padding-top: 1.5rem;
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .copyright {
          color: #6b7280;
          font-size: 0.875rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          color: #9ca3af;
          transition: color 0.2s;
        }
        .social-link:hover {
          color: #db2777;
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div>
              <h3 class="footer-heading">Navigation</h3>
              <div class="footer-links">
                <a href="/" class="footer-link">Accueil</a>
                <a href="/montant.html" class="footer-link">Montants</a>
                <a href="/depenses.html" class="footer-link">Dépenses</a>
                <a href="/achats.html" class="footer-link">Achats</a>
              </div>
            </div>
            <div>
              <h3 class="footer-heading">Ressources</h3>
              <div class="footer-links">
                <a href="#" class="footer-link">Aide</a>
                <a href="#" class="footer-link">Statistiques</a>
                <a href="#" class="footer-link">Exports</a>
                <a href="#" class="footer-link">Réglages</a>
              </div>
            </div>
            <div>
              <h3 class="footer-heading">À propos</h3>
              <div class="footer-links">
                <a href="#" class="footer-link">Contact</a>
                <a href="#" class="footer-link">Confidentialité</a>
                <a href="#" class="footer-link">Conditions</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="copyright">&copy; 2023 FinanciFolio. Tous droits réservés.</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
