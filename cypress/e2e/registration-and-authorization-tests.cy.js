 

describe('registration-and-authorization-tests', () => {
  
  beforeEach(() => {
  cy.visit('https://automationteststore.com/index.php?rt=account/create')
  })

  const test = [
    {
        testData:
        {
          firstName: 'Maksym1',
          lastName: 'Kozub',
          email: 'maxim20@gmail.com',
          telephone: '+380-983-12-54',
          fax: '-',
          company: 'XZ',
          address_1: 'Zdanovskoi 63',
          address_2: 'Zdanovskoi 67',
          city: 'Kyiv',
          postcode: '03040',
          country_id: 'United Kingdom',
          loginName:'Maksym1',
          passWord: 'AAbb1122',
          confirm: 'AAbb1122',
          zone_id: 'Aberdeen',

        },

        expectedResult:
        {
          loginname: 'Maksym1',
          password: 'AAbb1122'   
        },
    }]      
  
  test.forEach(({ testData, expectedResult }) => {

    it(`${testData.content}`, () => {
      cy.get('#AccountFrm_firstname').type(testData.firstName); 
      cy.get('#AccountFrm_lastname').type(testData.lastName);
      cy.get('#AccountFrm_email').type(testData.email);
      cy.get('#AccountFrm_telephone').type(testData.telephone);
      cy.get('#AccountFrm_fax').type(testData.fax);
      //Your Address
      cy.get('#AccountFrm_company').type(testData.company);
      cy.get('#AccountFrm_address_1').type(testData.address_1);
      cy.get('#AccountFrm_address_2').type(testData.address_2);
      cy.get('#AccountFrm_city').type(testData.city);  
    
      cy.get('#AccountFrm_postcode').type(testData.postcode); 
      cy.get('#AccountFrm_country_id').eq(0).select('United Kingdom');
      //Login Details
      cy.get('#AccountFrm_loginname').type(testData.loginName);
      cy.get('#AccountFrm_password').type(testData.passWord);
      cy.get('#AccountFrm_confirm').type(testData.confirm);
      //Newsletter
      cy.get('#AccountFrm_newsletter0').click();
  
      cy.get('#AccountFrm_zone_id').select(testData.zone_id);//якщо я цю дію закидаю на пару строк вище(там де вона мала йти по порядку),то вона анульовується,чому? 

      cy.get('#AccountFrm_agree').click()

      cy.get('.btn.btn-orange.pull-right.lock-on-click').click();
      
      cy.get('.ct_padding_right').should('contain',' Your Account Has Been Created!')
    });
    
    it(`${testData.content}`, () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
      
      cy.get('#loginFrm_loginname').type(expectedResult.loginname);
      cy.get('#loginFrm_password').type(expectedResult.password);
      cy.get('.btn.btn-orange.pull-right').eq(1).click();
    })
   });
});

