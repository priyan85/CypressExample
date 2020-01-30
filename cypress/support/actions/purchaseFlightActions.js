const inputFirstName = "input[id='inputName']";
const inputAddress = "input[id='address']";
const inputCity = "input[id='city']";
const inputState = "input[id='state']";
const inputZipCode = "input[id='zipCode']";
const btnSubmit = "input[class='btn btn-primary']";
const successMessage = "Thank you for your purchase today!";

export const purchaseFlight = () => {
  cy.get(inputFirstName)
    .type("person one")
    .get(inputAddress)
    .type("address line 1")
    .get(inputCity)
    .type("cityname")
    .get(inputState)
    .type("statename")
    .get(inputZipCode)
    .type("1243AA")
    .get(btnSubmit)
    .click();
};

export const verifyPurchase = () => {
  cy.get("h1").should($text => {
    expect($text).to.contain(successMessage);
  });
};
