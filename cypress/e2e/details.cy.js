describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies', {
      fixture: 'movie_details.json'
    }).as('getMovies');
    cy.visit('http://localhost:3000');
    cy.wait('@getMovies');
  });

  it('displays movie details when a poster is clicked', () => {
    cy.get('.movie-card').first().click();

    cy.get('.movie-details-container').should('be.visible');
    cy.get('.movie-info h2').contains('The Dark Knight');
    cy.get('.movie-info p').contains('Genres: Drama, Action, Crime, Thriller');
    cy.get('.movie-info p').contains('Overview: Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.');
    cy.get('.movie-info p').contains('Release Date: 2008-07-16');
  });
});