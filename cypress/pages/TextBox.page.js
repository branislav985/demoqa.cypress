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

  assertSubmittedData(name, email, adress, permanentAdress) {
    const inputDataArray = [name, email, adress, permanentAdress];
    var submitedDataArray = [];
    cy.get("p")
      .should("be.visible")
      .each(($li) => submitedDataArray.push($li.text().split(":")[1].trim()))
      .then(() => {
        for (var i = 0; i < inputDataArray.length; i++) {
          expect(inputDataArray[i]).to.equal(submitedDataArray[i]);
        }
      });
  }
}
