class LoginPage {
    visit(){
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]');
    }

    submitLoginForm(loginname, password){
        cy.log(`Auth user with username: ${loginname} and pass: ${password}`);

        this.getLoginField().type(loginname)
        this.getPasswordField().type(password)
        this.getSubmitButton().click()
    }

}
export default new LoginPage();