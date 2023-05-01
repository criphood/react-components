describe('e2e test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('navigation should work correctly', () => {
    cy.visit('/');
    cy.get('a[href="/about"]').contains('About').click();
    cy.url().should('include', '/about');
    cy.get('a[href="/forms"]').contains('Forms').click();
    cy.url().should('include', '/forms');
    cy.get('a[href="/"]').contains('Main').click();
    cy.url().should('include', '/');
  });

  it('error page', () => {
    cy.visit('/qwerty');
    cy.get('#root').contains(/page not found/i);
  });

  it('main page', () => {
    cy.visit('/');

    cy.get('input[placeholder="Search..."]').type('car{enter}');
    cy.get('input[placeholder="Search..."]').should('have.value', 'car');

    cy.get('.card').eq(0).should('exist').click();
    cy.get('.active').should('exist');
  });

  it('forms', () => {
    cy.visit('/forms');

    cy.get('#name').type('Artem');
    cy.get('#name').should('have.value', 'Artem');

    cy.get('#birthday').type('2018-07-22');
    cy.get('#birthday').should('have.value', '2018-07-22');

    cy.get('#city').click();
    cy.get('li[data-value="Moscow"]').click();

    cy.get('input[type="radio"]').eq(0).click();

    cy.get('.avatar__label').click();
    cy.get('#avatar').attachFile('test.jpg');

    cy.get('#consent').click();
    cy.get('#consent').should('be.checked');

    cy.get('input[value="Submit"]').click();

    cy.get('.user').should('exist');
  });
});
