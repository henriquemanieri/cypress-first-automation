describe('template spec', () => {
  it('lumetravel flow', function () {
    cy.visit('https://lume-lar-reservas.lovable.app/')
    cy.get('#root input[placeholder="Cidade"]').click();
    cy.get('#root input[placeholder="Cidade"]').type('Paraty');
    cy.get('#root div.lg\\:grid-cols-5 button.bg-primary').click();
    cy.get('#root a[href="/propriedade/4"] button.bg-primary').click();
    cy.get('#root button[aria-controls="radix-:r29:"]').click();
    cy.get('#radix-\\:r29\\: button[tabindex="0"]').click();
    cy.get('#root button[aria-controls="radix-:r2a:"]').click();
    cy.get('#radix-\\:r2a\\: button[tabindex="0"]').click();
    cy.get('#root button.h-11').click();
    cy.get('#email').click();
    cy.get('#email').type('many@lume.com');
    cy.get('#root form.space-y-4 > div:nth-child(2)').click();
    cy.get('#password').click();
    cy.get('#password').type('test123');
    cy.get('#root button.w-full').click();
    cy.get('#root svg.lucide-x').click();

  });
});

