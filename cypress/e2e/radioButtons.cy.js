///<reference types = 'Cypress'/>
import RadioButtonsPage from "../pages/radioButton.page";
const pageRadioButtons = new RadioButtonsPage();

describe("Check a functionality of radio buttons", () => {
  before("", () => {
    cy.visit("/elements");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  const radioButton = ["Yes", "Impressive", "No"];

  // In case of No button, assert that it is disabled
  it('Select some button, ckeck the value and assert "no" button is disabled', () => {
    pageRadioButtons.clickOnRadioButton();
    pageRadioButtons.checkAllButtonsFunctionalityAndAssertNoButtonIsDisabled(
      radioButton
    );
  });
});
