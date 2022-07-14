import { semiCompletedItems } from "../../fixtures/semiCompleteItems";
import { filters } from "../../support/selectors";
import {
  snapshotData,
  getUncompletedTodos,
  getCompletedTodos,
} from "../../support/actions/utils";
import { validateFilters } from "../../support/actions/functions";
import {Filters} from '../../support/enums'

describe("Validates filters on multiple todo items", () => {
  before(() => {
    cy.navigateToUrl("/");
    snapshotData(semiCompletedItems);
  });

  it("validates only uncompleted todo items are displayed on Active", () => {
    const uncompletedTodosTitles = [];
    validateFilters(
      getUncompletedTodos,
      uncompletedTodosTitles,
      filters.filter(Filters.Active)
    );
  });
  it("validates only completed todo items are displayed on Completed", () => {
    const completedTodosTitles = [];
    validateFilters(
      getCompletedTodos,
      completedTodosTitles,
      filters.filter(Filters.Complete)
    );
  });
});
