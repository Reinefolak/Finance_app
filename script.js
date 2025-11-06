// Scripts globaux
document.addEventListener('DOMContentLoaded', function() {
    console.log('FinanciFolio chargé');
    
    // Calculer et mettre à jour les barres de progression
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
    });
    
    // Formater les montants en FCFA
    const amountElements = document.querySelectorAll('.amount');
    amountElements.forEach(el => {
        const amount = parseFloat(el.textContent);
        el.textContent = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'XOF'
        }).format(amount).replace('CFA', 'FCFA');
    });
});

// Fonction pour ajouter une nouvelle transaction
function addTransaction(type, amount, category, date, description) {
    // Implémentation à ajouter
    console.log(`Nouvelle transaction: ${type} ${amount} FCFA pour ${category}`);
}
