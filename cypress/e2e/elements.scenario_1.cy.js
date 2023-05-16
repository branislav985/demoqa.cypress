///<reference types = 'cypress'/>

import ElementsPage from "../pages/elements.page";

const elementsPage = new ElementsPage();

describe("Visite Demoka site, go to elements page and check the labels", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should visite Demoka, click on elements and check labels", () => {
    elementsPage.clickOnElementsHeader();
    elementsPage.clickOnTextBox();
  });
});