 import user from "../fixtures/user.json"
 
 describe('authorization test', () => {
    it('Test1', () => {
        cy.visit('/index.php?rt=account/login');
    
        cy.log('check usen unauthorized')
       // cy.getCookie('customer').should('be.null');

        cy.get('#loginFrm_loginname').type(user.firstName);
        cy.get('#loginFrm_password').type(user.passWord);
        cy.get('.btn.btn-orange.pull-right').eq(1).click();
    
    
    });
});  
