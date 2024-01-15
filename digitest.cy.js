describe('Example where',()=>{

it('I check if a URL contains something', () =>{

cy.visit('https://www.digi24.ro/emisiuni/toate-emisiunile')
cy.get('.container > .gdpr-trigger').click();
cy.url().should('include', '/emisiuni/');










})




})