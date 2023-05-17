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
  clickOnTextBox() {
    cy.get(elementsOnElementsPage.TEXT_BOX).should("be.visible").click();
  }
  checkIfAllLabelsArePresented() {
    let allLabels = [
      cy.get(elementsOnElementsPage.FUL_NAME_LABEL),
      cy.get(elementsOnElementsPage.EMAIL_LABEL),
      cy.get(elementsOnElementsPage.ADRESS_LABEL),
      cy.get(elementsOnElementsPage.PERMANENT_ADRES_LABEL),
    ];
    allLabels.forEach((item) => item.should("be.visible"));
  }
}
