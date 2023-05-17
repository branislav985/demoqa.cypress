///<reference types = 'cypress'/>

import ElementsTextBox from "../elements/textBox.elements";
const elementsTextBox = new ElementsTextBox();

export default class TextBoxPage {
  enterDataInInputFields(name, email, adress, permanentAdress) {
    cy.get(elementsTextBox.INPUT_NAME).type(name);
    cy.get(elementsTextBox.INPUT_EMAIL).type(email);
    cy.get(elementsTextBox.INPUT_ADRESS).type(adress);
    cy.get(elementsTextBox.INPUT_PERMANENT_ADRESS).type(permanentAdress);
  }

  clickOnSubmitButton() {
    cy.get(elementsTextBox.SUBMIT_BUTTON).click();
  }
}
