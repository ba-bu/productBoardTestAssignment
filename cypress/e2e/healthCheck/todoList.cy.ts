import { todoList, todoItem } from "../../support/selectors";
import { singleTodo } from "../../fixtures/singleItem";
import {TodoList} from '../../support/enums'
import {validateRemainingItems} from '../../support/actions/functions'

let numberItems = singleTodo.length;

describe("Validates the initial state of the todo application", () => {
  before(() => {
    cy.navigateToUrl("/");
  });

  it("validates the initial load state of the application", () => {
    cy.get(todoList.todoHeader).should("have.text", TodoList.Title);
    cy.get(todoList.inputField).should(
      "have.attr",
      "placeholder",
      TodoList.Placeholder
    );
  });
  it("validates the application with added todo", () => {
    cy.enterValue(todoList.inputField, singleTodo[0].title);
    cy.validatesCreatedTodo(todoItem.todoItem, singleTodo[0].title);
    validateRemainingItems(todoList.counter, numberItems)
    cy.validateNumberOfItemsInTodoList(todoList.todoList, numberItems)
  });
});
