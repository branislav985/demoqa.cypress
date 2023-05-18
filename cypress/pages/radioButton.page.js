///<reference types = 'cypress'/>

import RadioButtonElements from "../elements/radioButton.elements";
const elementsRadioButtons = new RadioButtonElements();

export default class RadioButtonsPage {
  clickOnRadioButton() {
    cy.get(elementsRadioButtons.RADIO_BUTTON).click();
  }

  checkAllButtonsFunctionalityAndAssertNoButtonIsDisabled(radioButton) {
    radioButton.forEach((element) => {
      switch (element) {
        case "Yes":
          cy.get(elementsRadioButtons.RADIO_YES_BUTTON).check({ force: true });
          this.assertSelectedValue(element);
          break;
        case "Impressive":
          cy.get(elementsRadioButtons.RADIO_IMPRESSIVE_BUTTON).check({
            force: true,
          });
          this.assertSelectedValue(element);
          break;
        case "No":
          cy.get(elementsRadioButtons.RADIO_NO_BUTTON).should("be.disabled");
          cy.log("No button is disabled");
          break;
      }
    });
  }

  assertSelectedValue(selectedValue) {
    cy.get(elementsRadioButtons.SELECTED_VALUE)
      .invoke("text")
      .then(($text) => {
        expect($text).contains(selectedValue);
      });
  }
}
