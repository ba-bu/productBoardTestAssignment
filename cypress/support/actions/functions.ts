import {semiCompletedItems} from '../../fixtures/semiCompleteItems'
import {todoItem} from '../selectors'

export function validateFilters (func: Function, res: Array<string>, filter: string) {
    func(semiCompletedItems, res)
    cy.get(filter).click()
    cy.validatesTitlesOfAllTodos(todoItem.todoItem, res) 
};

export function validateRemainingItems (location: string, numberItems: number) {
    cy.get(location).within(() => {
        numberItems !== 1
        ? cy.contains(`${numberItems} items left`)
        : cy.contains(`${numberItems} item left`)
        
    });
};
