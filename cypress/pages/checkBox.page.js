///<reference types = 'cypress'/>

import CheckBoxElements from "../elements/checkBox.elements";

const elementsCheckBox = new CheckBoxElements();

export default class CheckBoxPage {
  clickOnCheckBoxButton() {
    cy.get(elementsCheckBox.CHECK_BOX_BUTTON).click();
  }
  checkIfThereIsOnlyOneLabelWithTextHome() {
    cy.get(elementsCheckBox.ALL_LABELS).should("have.lengthOf", 1);
  }
  expandOrCollapseLabel(labelName) {
    cy.get(elementsCheckBox.ALL_LABELS)
      .contains(labelName)
      .parent("label")
      .siblings("button")
      .click();
  }

  checkInMoreLabelsAndAssert(moreLabels) {
    for (var i = 0; i < moreLabels.length; i++) {
      var label = moreLabels[i];
      cy.log(label);
      this.checkInSomeElementAndAssert(label);
    }
  }

  checkInSomeElementAndAssert(elementName) {
    cy.get("body").then(($body) => {
      if ($body.find("span:contains(" + elementName + ")").length == 0) {
        cy.get(elementsCheckBox.EXPAND_BUTTON).first().click();
        this.checkInSomeElementAndAssert(elementName);
      } else {
        cy.get(elementsCheckBox.ALL_LABELS)
          .contains(elementName)
          .parent("label")
          .children("input")
          .invoke("show")
          .check();
      }
      cy.get(elementsCheckBox.ALL_LABELS)
        .contains(elementName)
        .parent("label")
        .children("input")
        .invoke("show")
        .should("be.checked");
    });
  }

  checkIfSelectedLabelsHaveHalfSelectedParents(moreLabels) {
    for (var i = 0; i < moreLabels.length; i++) {
      var label = moreLabels[i];
      cy.log(label);
      this.checkIfSelectedDocumentHasHalfSelectedParents(label);
    }
  }

  checkIfSelectedDocumentHasHalfSelectedParents(documentName) {
    cy.get("body").then(($body) => {
      if (
        $body
          .find("span:contains(" + documentName + ")")
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .find("svg").length
      ) {
        cy.get(elementsCheckBox.ALL_LABELS)
          .contains(documentName)
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .find("svg")
          .invoke("attr", "class")
          .should("eq", "rct-icon rct-icon-half-check");
        var parent = cy
          .get(elementsCheckBox.ALL_LABELS)
          .contains(documentName)
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .children("span")
          .last()
          .invoke("text")
          .then(($text) => {
            cy.log("For " + documentName + " element, parent is " + $text);
          });
      } else {
        cy.log("For " + documentName + " element, there is no parent");
        return;
      }
    });

    cy.get("body").then(($body) => {
      if (
        $body
          .find("span:contains(" + documentName + ")")
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .find("svg").length
      ) {
        cy.get(elementsCheckBox.ALL_LABELS)
          .contains(documentName)
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .find("svg")
          .invoke("attr", "class")
          .should("eq", "rct-icon rct-icon-half-check");
        var grandParent = cy
          .get(elementsCheckBox.ALL_LABELS)
          .contains(documentName)
          .parent("label")
          .parent("span")
          .parent("li")
          .parent("ol")
          .parent("li")
          .parent("ol")
          .siblings("span")
          .children("label")
          .children("span")
          .last()
          .invoke("text")
          .then(($text) => {
            cy.log(
              "For " + documentName + " element, grand parent is " + $text
            );
          });
      } else {
        cy.log("For " + documentName + " element, there is no grand parent");
        return;
      }
    });
  }
}
