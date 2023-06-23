import {faker} from '@faker-js/faker'
import user from '../fixtures/user.json'
import {login} from '../support/helper.js'


user.firstName = faker.person.firstName('male');
user.lastName = faker.person.firstName('male');
user.email = faker.internet.email();
user.postcode = faker.location.zipCode('#####');
user.address_1 = faker.location.street();
user.address_2 = faker.location.street();

user.loginName = (user.firstName);
user.passWord = faker.internet.password({length: 20});
user.confirm = (user.passWord);


describe('registration test', () => {
  it('Test1', () => {
    cy.visit('/index.php?rt=account/create')
    cy.get('#AccountFrm_firstname').type(user.firstName); 
    cy.get('#AccountFrm_lastname').type(user.lastName);
    cy.get('#AccountFrm_email').type(user.email);
    cy.get('#AccountFrm_telephone').type(user.telephone);
      
  
    cy.get('#AccountFrm_company').type(user.company);
    cy.get('#AccountFrm_address_1').type(user.address_1);
    cy.get('#AccountFrm_address_2').type(user.address_2);
    cy.get('#AccountFrm_city').type(user.city);  
    
    cy.get('#AccountFrm_postcode').type(user.postcode); 
   cy.get('#AccountFrm_country_id').eq(0).select('United Kingdom');
  
   cy.get('#AccountFrm_loginname').type(user.loginName);
   cy.get('#AccountFrm_password').type(user.passWord);
    cy.get('#AccountFrm_confirm').type(user.confirm);
  
    cy.get('#AccountFrm_newsletter0').click();
  
    cy.get('#AccountFrm_zone_id').select(user.zone_id);//якщо я цю дію закидаю на пару строк вище(там де вона мала йти по порядку),то вона анульовується,чому? 

    cy.get('#AccountFrm_agree').click()

    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();
      
    cy.get('.ct_padding_right').should('contain',' Your Account Has Been Created!')
    
    login(user);
  });
});
