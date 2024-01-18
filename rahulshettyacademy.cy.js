/// <reference types="cypress" />

describe("rahulshettyacademy", () => {
  it("addtocart", () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.url().should('contain', 'seleniumPractise');

    cy.get('[class="increment"]').first().click();
    cy.get('input.quantity').first().should('value', '2');

    cy.get('div > div:nth-child(1) > div.product-action > button').first().click();

    cy.get('img[alt="Cart"]').click();

    cy.get('div.action-block [type="button"]').first().click();
    cy.get('p.product-name').should('contain', "Brocolli - 1 Kg");
    
    cy.contains('Place Order').click();

    cy.get('select').select("Armenia");

    cy.get('input.chkAgree').click();

    cy.contains('Proceed').click();
  })
})