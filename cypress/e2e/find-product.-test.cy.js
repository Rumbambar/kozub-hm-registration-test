import findProduct from "../support/helper.js"
 

describe('find product test', () => {

    beforeEach(() => {
        
        
        cy.visit('/');
        cy.get('.pull-left.input-medium.search-query.dropdown-toggle').click().type('E');
        cy.get('.button-in-search').click();
    })

    it('test1', () => {
        cy.visit('/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=1');
        
        cy.get('').should ('have.text','[title="Shaving cream"]'); 
    })
})