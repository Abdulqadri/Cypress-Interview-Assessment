import { urlOfWeb } from "./Url_pom";
import { loginDetails } from "./successfulLogin_pom";
import { invalidLoginDetails } from "./unsuccessfulLogin_pom";

describe('Login Interview Assessment', () => {
  //Initializing and delaring newUrl to allow user navigate to the Url
 const newUrl = new urlOfWeb();


 //Declaring and Initializing login
 let validUserLoginDetails = new loginDetails()

 let invalidLoginCredentials = new invalidLoginDetails

 

 //Before each hook was set up to run for each test
      beforeEach(() => {

      
      newUrl.loginMethod();
     
     })

      //Test Script 1
      it('Successful login with valid credentials..', ()=> {

        validUserLoginDetails.enterUsername(); //A username input field with the ID username
        validUserLoginDetails.enterPassword(); //A password input field with the ID password
        validUserLoginDetails.clickLoginButton(); // A login button with the ID loginButton
        cy.newUrl().should('contain','/dashboard'); // Successful login verification
      })

        //Test Script 2
      it('unSuccessful login with invalid credentials..', ()=> {

        invalidLoginCredentials.enterUsername(); //A username input field with the ID username
        invalidLoginCredentials.enterPassword(); //A password input field with the ID password
        invalidLoginCredentials.clickLoginButton(); // A login button with the ID loginButton
        cy.get('#errorMessage').should('be.visible').and('contain', 'Invalid credentials'); //checking for the presence of the error message upon failed login.
      })
      
    })