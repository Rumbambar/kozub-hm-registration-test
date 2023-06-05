export function login(user) {
    
    
    cy.visit('/index.php?rt=account/login');
    
    cy.log('check usen unauthorized')
    cy.getCookie('customer').should('be.null');
    
    cy.log('Authorize user')
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.passWord);
    cy.get('.btn.btn-orange.pull-right').eq(1).click();
  
}

//  export function findProduct(shavingCream) {
//      cy.visit('https://automationteststore.com/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=1');
//      cy.get('[title="Shaving cream"]').should('exist')
    
    
    
    
  
//  }