import { unCompletedItems } from "../../fixtures/uncompleteItems";
import { todoList, todoItem } from "../../support/selectors";

describe("Adds 2 todos and validates they are shown on the page", () => {
  before(() => {
    cy.navigateToUrl("/");
  });

  it("adds two notes and validates them", () => {
    unCompletedItems.forEach((item) => {
      cy.enterValue(todoList.inputField, item.title);
    })
    cy.get(todoItem.todoItem).each((item, index) => {
      cy.validatesCreatedTodo(item, unCompletedItems[index].title);
    });
    cy.validateNumberOfItemsInTodoList(todoList.todoList, unCompletedItems.length)
  });
});
