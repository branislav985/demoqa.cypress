///<reference types = 'cypress'/>

import CheckBoxPage from "../pages/checkBox.page";

const pageCheckBox = new CheckBoxPage();

describe("Check functionallity of check boxes and expand buttons", () => {
  before(() => {
    cy.visit("/Elements");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Should be visible only Home label, the expand all labels and check check buttons", () => {
    pageCheckBox.clickOnCheckBoxButton();
    // pageCheckBox.checkIfThereIsOnlyOneLabelWithTextHome();
  });
});
