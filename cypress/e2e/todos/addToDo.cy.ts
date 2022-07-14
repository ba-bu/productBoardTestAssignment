import { todoList, todoItem } from "../../support/selectors";
import { singleTodo } from "../../fixtures/singleItem";

describe("Adds todo item and validates it is shown on the page", () => {
  before(() => {
    cy.navigateToUrl("/");
  });

  it("adds todo item and validates it", () => {
    cy.addsAndValidatedTodo(
      todoList.inputField,
      singleTodo[0].title,
      todoItem.todoItem
    );
  });
});
