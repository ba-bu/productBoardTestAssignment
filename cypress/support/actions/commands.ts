Cypress.Commands.add('navigateToUrl', (url: string) => {
    cy.visit(url)
});

Cypress.Commands.add('enterValue', (location: string, value: string) => {
  cy.get(location).clear().type(`${value}{enter}`)
});

Cypress.Commands.add('validatesCreatedTodo', (location: string, value: string) => {
  cy.get(location).should('have.text', value).should('be.visible')

});

Cypress.Commands.add('checkGivenElement', (location: string, index: number) => {
  cy.get(location).eq(index).click()
});

Cypress.Commands.add('validateElementIsCompleted', (location: string, value: string, index: number) => {
  cy.get(location).eq(index).should('have.class', value)
});

Cypress.Commands.add('validatesTitlesOfAllTodos', (location: string, value: Array<string>) => {
  cy.get(location).each((item, index)=> {
    cy.validatesCreatedTodo(item, value[index])
  })
});

Cypress.Commands.add('validateElementIsChecked', (location: string, value: string) => {
  cy.get(location).should('have.attr', value)
});

Cypress.Commands.add('addsAndValidatedTodo', (location: string, value: string, todoItem: string) => {
  cy.enterValue(location, value)
  cy.validatesCreatedTodo(todoItem, value)
});

Cypress.Commands.add('validateNumberOfItemsInTodoList', (location: string, numberItems: number) => {
    cy.get(location)
      .children()
      .should("have.length", `${numberItems}`);
});
