export function login(user) {
    
    
    cy.visit('/index.php?rt=account/login');
    
    cy.log('check usen unauthorized')
    //cy.getCookie('customer').should('be.null');
    
    cy.log('Authorize user')
    cy.get('#loginFrm_loginname').type(user.loginName);
    cy.get('#loginFrm_password').type(user.passWord);
    cy.get('.btn.btn-orange.pull-right').eq(1).click();
  
}

export function findProduct(armaniCodePourFemme) {
    cy.visit('/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=1');
    if(('[title="Armani Code Pour Femme"]').be.visible)
        console.log('Product is find')
    else if (('[title="Armani Code Pour Femme"]').not.be.visible)
        console.log('Product don\'t find')
    
    cy.visit('/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=2');
    if(('[title="Armani Code Pour Femme"]').should('be.visible'))
        console.log('Product is find')
    else if (('[title="Armani Code Pour Femme"]').not.be.visible)
        console.log('Product don\'t find')

    cy.visit('/index.php?rt=product/search&keyword=E&category_id=0&sort=date_modified-ASC&limit=20&page=3');
    if(('[title="Armani Code Pour Femme"]').should('be.visible'))
        console.log('Product is find')
    else if (('[title="Armani Code Pour Femme"]').not.be.visible)
        console.log('Product don\'t find')
}

export function findNewProd(productName){
    cy.get('ul.pagination a').then( pages => {
        for(let i = 1; i < pages.length; i++){
            cy.location().then( location => {
                if(!location.search.includes('product/product')){
                    cy.get('body').then( body => {
                        if(body.find(`.prdocutname[title="${productName}"]`).length > 0){
                            cy.get(`.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get('ul.pagination a').contains('>').click();
                        }
                    })
                }
            })
        }
    })
}

export function findProduct(productName){
    cy.get('body').then( body => {
        if(body.find(`.prdocutname[title="${productName}"`).length > 0){
            cy.get(`.prdocutname[title="${productName}"]`).click();
        } else {
            cy.get('ul.pagination a').contains('>').click();
            findProduct(productName)
        }
    })
}