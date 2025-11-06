// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Any shared functionality can go here
    console.log('FinanciFolio app loaded');
});

// Function to format currency (FCFA)
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'decimal',
        maximumFractionDigits: 0
    }).format(amount) + ' FCFA';
}
