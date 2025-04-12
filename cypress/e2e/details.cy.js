import details from "../fixtures/movie_details.json";

describe("Movie Details Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies",
      {
        fixture: "movie_posters.json",
      },
    ).as("getMovies")
    cy.visit("http://localhost:3000")
    cy.wait("@getMovies")
  });

  it("displays movie details when a poster is clicked", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies/155",
      { fixture: "movie_details.json" }
    ).as("getMovieDetails")

    cy.get(".movie-card").first().click()

    cy.wait("@getMovieDetails")

    cy.get(".movie-details-container").should("be.visible")
    cy.get('.movie-backdrop')
      .should('be.visible')
      .and('have.attr', 'src')
      .and('include', '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg')
    cy.get('.movie-backdrop')
      .should('have.attr', 'alt', 'The Dark Knight')
    cy.get(".movie-info h2").contains("The Dark Knight")
    cy.get('.movie-info p strong').should('contain', 'Genres:')
    cy.get('.movie-info p').should('contain', 'Drama, Action, Crime, Thriller')
    cy.get('.movie-info p strong').should('contain', 'Overview:')
    cy.get('.movie-info p').should('contain', "When the menace known as The Joker emerges from his mysterious past...")
    cy.get('.movie-info p strong').should('contain', 'Release Date:')
    cy.get('.movie-info p').eq(2).should('contain', '2008-07-18')
  });

  it("navigates back to home when home button is clicked", () => {
    cy.get(".movie-card").first().click();

    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies",
      {
        statusCode: 200,
        fixture: "movie_posters",
      },
    ).as("getMovies")

    cy.get(".back-button").click()

    cy.url().should("eq", "http://localhost:3000/")
    cy.get(".movie-card").should("have.length", 4)
  });

  it("navigates back using the browser back button", () => {
    cy.get(".movie-card").first().click()

    cy.intercept(
      "GET",
      "https://rancid-tomatillos-api-ce4a3879078e.herokuapp.com/api/v1/movies",
      {
        fixture: "movie_posters",
      },
    ).as("getMoviesAgain");

    cy.go("back")

    cy.url().should("eq", "http://localhost:3000/")
    cy.get(".movie-card").should("have.length", 4)
  })
})

describe("Non-existent Route", () => {
  it("displays an error message when visiting a non-existent route", () => {
    cy.visit("http://localhost:3000/banana");

    cy.get(".error-message").should(
      "contain",
      "Sorry, we couldn’t load this movie."
    )
  })
})
