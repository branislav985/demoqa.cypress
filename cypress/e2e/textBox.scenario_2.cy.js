///<reference types = 'cypress'/>

import TextBoxPage from "../pages/TextBox.page";
import { faker } from "@faker-js/faker";

const pageTexBox = new TextBoxPage();
const name = faker.person.fullName();
const email = faker.internet.email();
const adress = faker.location.streetAddress();
const permanentAdress = faker.location.secondaryAddress();

describe("Populates and submit all input fields at Text Box page", () => {
  before(() => {
    cy.visit("/");
  });

  it("Should fill in all input fields and submit form", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("/text-box");
    pageTexBox.enterDataInInputFields(name, email, adress, permanentAdress);
    pageTexBox.clickOnSubmitButton();
  });
});
