export class urlOfWeb{
    url = "url of the project"

    loginMethod(){
        cy.visit(this.url)
    }

}
