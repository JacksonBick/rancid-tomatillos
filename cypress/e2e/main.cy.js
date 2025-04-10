// Mock data to use for testing:
import posters from '../fixtures/movie_posters.json' 
// import details from '../fixtures/movie_details.json' (you will need to add your own mock data to this file!)

describe('Main Page', () => {
  beforeEach(() => { 
    cy.intercept("GET", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies", {
      statusCode: 200, 
      fixture: "movie_posters"
    })

    cy.visit('http://localhost:3000/')
  })

  it('displays title on page load', () => {
    cy.get('h1')
    .contains('rancid tomatillos')
  })
  it('displays a grid of movie posters on load', () => {
    cy.get('.movie-container').should('exist')
    cy.get('.movie-card').should('have.length', 4)
  })
  it('contains movie posters with an img, vote banner and buttons', () => {
    cy.get('.movie-card').first().find('.vote-banner').should('exist')
    cy.get('.movie-card').first().find('img').should('exist')
    cy.get('.movie-card').first().find('.vote-count').contains('Votes:')
    cy.get('.movie-card').first().find('.vote-count').should('have.text', 'Votes: 32544')
    cy.get('.movie-card').first().find('button').contains('▲')
    cy.get('.movie-card').first().find('button').contains('▼')
    cy.get('.movie-card').last().find('.vote-banner').should('exist')
    cy.get('.movie-card').last().find('img').should('exist')
    cy.get('.movie-card').last().find('.vote-count').contains('Votes:')
    cy.get('.movie-card').last().find('.vote-count').should('have.text', 'Votes: 27642')
    cy.get('.movie-card').last().find('button').contains('▲')
    cy.get('.movie-card').last().find('button').contains('▼')
  })
})

describe('Voting Functionality', () => {
  beforeEach(() => {
    // Intercept the GET request to return fixture data
    cy.intercept("GET", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies", {
      statusCode: 200,
      fixture: "movie_posters"
    }).as("getMovies");

    // Intercept PATCH request to simulate a successful upvote
    cy.intercept("PATCH", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155", {
      statusCode: 200,
      body: {
        id: 155,
        poster_path: "https://image.tmdb.org/t/p/original//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        title: "The Dark Knight",
        vote_count: 32545 // new updated count
      }
    }).as("patchVote");

    cy.visit("http://localhost:3000/");

    cy.wait("@getMovies"); // make sure movies are loaded first
  });

  it("sends a PATCH request and updates vote count when upvoted", () => {
    
    cy.get('.movie-card').first().find('.vote-count').should('have.text', 'Votes: 32544');
    cy.get('.movie-card').first().find('button').contains('▲').click();

    cy.wait("@patchVote");

    cy.get('.movie-card').first().find('.vote-count').should('have.text', 'Votes: 32545');
  });
});

describe('Sad Path - API Failure', () => {
  it('should display an error message if the movies fail to load', () => {
    cy.intercept("GET", "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies", {
      statusCode: 500
    }).as("getMoviesError");

    cy.visit("http://localhost:3000/");

    cy.wait("@getMoviesError");

    cy.get(".error-message").should("exist")
      .and("contain", "Sorry, we’re having trouble loading movies. Please try again later.");
  });
});