const chooseFlightButton = "input[class='btn btn-small']";

export const selectFlight = () => {
  cy.get(chooseFlightButton)
    .first()
    .click();
};
