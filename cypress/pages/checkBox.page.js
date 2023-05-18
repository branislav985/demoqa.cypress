///<reference types = 'cypress'/>

import CheckBoxElements from "../elements/checkBox.elements";

const elementsCheckBox = new CheckBoxElements();

export default class CheckBoxPage {
  clickOnCheckBoxButton() {
    cy.get(elementsCheckBox.CHECK_BOX).click();
  }
  checkIfThereIsOnlyOneLabelWithTextHome() {
    cy.get(elementsCheckBox.ALL_LABELS).should("have.lengthOf", 1);
  }
  expandAllLabels() {
    cy.get(elementsCheckBox.ALL_LABELS).contains("Home").find(button).click();
  }
}
