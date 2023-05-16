///<reference types = 'cypress'/>

import ElementsOnElementPage from "../elements/elements.elemens";

const elementsOnElementsPage = new ElementsOnElementPage();

export default class ElementsPage {
  clickOnElementsHeader() {
    cy.get(elementsOnElementsPage.ELEMENTS_HEADER)
      .contains("Elements")
      .should("be.visible")
      .click();
  }
}
