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
  it('displays a vote-banner at the bottom of each poster', () => {
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