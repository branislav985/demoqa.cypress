///<reference types = 'cypress'/>

import ElementsPage from "../pages/elements.page";

const elementsPage = new ElementsPage();

describe("Visite Demoka site, go to elements page and check the labels", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should visite Demoka, click on elements and check labels", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    elementsPage.clickOnElementsHeader();
    elementsPage.clickOnTextBox();
    elementsPage.checkIfAllLabelsArePresented();
  });
});
