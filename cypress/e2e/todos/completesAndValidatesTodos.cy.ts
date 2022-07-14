import { todoItem } from "../../support/selectors";
import { snapshotData } from "../../support/actions/utils";
import { unCompletedItems } from "../../fixtures/uncompleteItems";
import {Status} from '../../support/enums'

describe("Checks a todo item and validates it is marked as completed", () => {
  before(() => {
    cy.navigateToUrl("/");
    snapshotData(unCompletedItems);
  });

  it("navigates to the page, checks the box and vlaidates the note is completed", () => {
    cy.checkGivenElement(todoItem.todoCheckbox, 0);
    cy.validateElementIsCompleted(todoItem.todoItemWrapper, Status.Completed, 0);
    cy.validateElementIsCompleted(todoItem.todoItemWrapper, Status.Uncompleted, 1);
  });
});
