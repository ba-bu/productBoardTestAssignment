import { completedItems } from "../../fixtures/completedItems";
import { snapshotData } from "../../support/actions/utils";
import { todoItem, filters, footer } from "../../support/selectors";
import {Status, Filters} from '../../support/enums'

describe("Clears compelted items", () => {
  before(() => {
    cy.navigateToUrl("/");
    snapshotData(completedItems);
  });

  it("clears completed items and validates no items are present", () => {
    cy.get(filters.filter(Filters.Complete)).click();
    cy.get(todoItem.todoCheckbox).each((item) => {
      cy.validateElementIsChecked(item, Status.Checked);
    });
    cy.get(footer.clearCompleted).click();
    cy.get(todoItem.todoItem).should("not.exist");
  });
});
