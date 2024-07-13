export class invalidLoginDetails {
    userName = "invalidUsername";
    passWord = "invalidPassword";

    enterUsername(userName) {
        cy.get('#username', { timeout: 5000 })
          .should('be.visible')
          .type(userName); // Correctly pass the userName argument to the type method
    }

    enterPassword(passWord) {
        cy.get('#password', { timeout: 5000 })
          .should('be.visible')
          .type(passWord); // Correctly pass the passWord argument to the type method
    }

    clickLoginButton() {
        cy.get('#loginButton', { timeout: 5000 })
          .should('be.visible')
          .click(); // Use the click method for the login button
    }
}