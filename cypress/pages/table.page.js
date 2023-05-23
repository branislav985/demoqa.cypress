///<reference types = 'cypress'/>

import { el } from "@faker-js/faker";
import TableElements from "../elements/table.elements";

const elementsTable = new TableElements();

export default class TablePage {
  clickOnTableButton() {
    cy.get(elementsTable.TABLE_BUTTON).click();
  }

  getNumberOfElements() {
    var allElements = [];

    cy.get(elementsTable.ALL_FIRST_NAMES).each((element) => {
      if (element.text().trim().length > 0) {
        allElements.push(element.text());
      }
    });
    return cy.wrap(allElements).its("length").as("length");
  }

  addNewElement(firstName, lastName, email, age, salary, department) {
    cy.get(elementsTable.ADD_BUTTON).click();
    cy.get(elementsTable.INPUT_NAME).should("be.visible").type(firstName);
    cy.get(elementsTable.INPUT_LAST_NAME).type(lastName);
    cy.get(elementsTable.INPUTT_EMAIL).type(email);
    cy.get(elementsTable.INPUT_AGE).type(age);
    cy.get(elementsTable.INPUT_SALARY).type(salary);
    cy.get(elementsTable.INPUT_DEPARTMENT).type(department);
    cy.get(elementsTable.SUBMIT_BUTTOM).click();
  }

  assertThatNumberOfElementsIsIncresedByOneAfterAddingNewItem(
    firstName,
    lastName,
    email,
    age,
    salary,
    department
  ) {
    this.getNumberOfElements().then((length) => {
      this.addNewElement(firstName, lastName, email, age, salary, department);
      this.getNumberOfElements().should("equal", length + 1);
    });
  }
}
