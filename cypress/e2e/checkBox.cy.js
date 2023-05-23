///<reference types = 'cypress'/>

import CheckBoxPage from "../pages/checkBox.page";

const pageCheckBox = new CheckBoxPage();

describe("Check functionallity of check boxes and expand buttons", () => {
  before(() => {
    cy.visit("/elements");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  var moreLabels = ["Desktop", "Word File.doc"];

  it("Check the functionality of check boxes", () => {
    pageCheckBox.clickOnCheckBoxButton();
    pageCheckBox.checkIfThereIsOnlyOneLabel();
    pageCheckBox.checkInMoreLabelsAndAssert(moreLabels);
    pageCheckBox.checkIfSelectedLabelsHaveHalfSelectedParents(moreLabels);
  });
});
