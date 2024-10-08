describe('Home Page', () => {
    it('Should load the home page', () => {
      cy.visit('http://localhost:5173'); // Remplace par l'URL de ton app
      cy.contains('Bienvenue').should('be.visible'); // Remplace "Bienvenue" par un élément attendu sur ta page d'accueil
    });
  });
  