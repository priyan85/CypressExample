const fromFlightSelector = "select[name='fromPort']";
const toFlightSelector = "select[name='toPort']";
const btnFindFlights = "input[value='Find Flights']";
const tableSearchResults = "table[class='table']";

export const navigateToSearchPage = () => cy.visit("/");

export const searchFlight = (from, to) => {
  cy.get(fromFlightSelector)
    .select(from)
    .get(toFlightSelector)
    .select(to)
    .get(btnFindFlights)
    .click();
};

export const verifySearchResultsDisplayed = () => {
  cy.get(tableSearchResults).should("be.visible");
};
