///<reference types = 'cypress'/>

import { faker } from "@faker-js/faker";
import TablePage from "../pages/table.page";

const pageTable = new TablePage();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const age = 33;
const salary = 2200;
const department = "marketing";

describe("Check functionality of table", () => {
  before(() => {
    cy.visit("/elements");
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Should incrementally incresae a number of First Names after adding new one", () => {
    pageTable.clickOnTableButton();
    pageTable.assertThatNumberOfElementsIsIncresedByOneAfterAddingNewItem(
      firstName,
      lastName,
      email,
      age,
      salary,
      department
    );
  });
});
