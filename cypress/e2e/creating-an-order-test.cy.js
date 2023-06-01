describe('creating-an-order-test', () => {
  
    beforeEach(() => {
    cy.visit('https://automationteststore.com/')
    })
  
    const test = [
      {
          expectedResult:
          {
            theOrderIsReady: 'Your Order Has Been Processed!'  
          },
      }]      
    
    test.forEach(({ testData, expectedResult }) => {
  
      it(`${testData.content}`, () => {
        cy.get('[href^="https://automationteststore.com/index.php?rt=product/category&path=68"]').eq(0).click(); 
        cy.get('.col-md-2.col-sm-2.col-xs-6.align_center').eq(1).click();
        cy.get('.fa.fa-cart-plus.fa-fw').eq(0).click();
       // cy.get('#option350').select('White  (999602 In Stock)');
        cy.get('#option351').select('Medium');
        //cy.get('#product_quantity').clear().should('have.value', '2') ??
        cy.get('.productpagecart  .cart').click();

        cy.get('.input-group #estimate_country').select('Ukraine');
        cy.get('.input-group  #estimate_country_zones').select('Kyiv');
        cy.get('.input-group.col-sm-8  #estimate_postcode').type('03040');
        cy.get('#cart_checkout2').click();

        cy.get('#loginFrm_loginname').type('Maksym1');
        cy.get('#loginFrm_password').type('AAbb1122');
        cy.get('.btn.btn-orange.pull-right').eq(1).click();
        cy.get('#checkout_btn').click();

        it(`${expectedResult.content}`, () => {
          
          cy.visit('https://automationteststore.com/index.php?rt=checkout/success');

          cy.get('#maincontainer').type(expectedResult.theOrderIsReady);
        });
      });
     });
  });
  