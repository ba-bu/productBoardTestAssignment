import { todoList, todoItem } from "../../support/selectors";

describe("Attempts to add empty todo and todo with whitespaces and validates they are not present", () => {
  before(() => {
    cy.navigateToUrl("/");
  });

  it("adds empty todo item and validates it", () => {
    cy.enterValue(todoList.inputField, '')
    cy.get(todoItem.todoItem).should('not.exist');
  });

  it("adds whitespace todo item and validates it", () => {
    cy.enterValue(todoList.inputField, '      ')
    cy.get(todoItem.todoItem).should('not.exist');
  });
});
