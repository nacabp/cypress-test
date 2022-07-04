describe('nas prvi yahoo test', function() {
  
  beforeEach(function(){
    cy.visit('https://google.com')
  })
  it('proveri yahoo', () => {
    cy.get('[name="q"]').type('yahoo').type('{enter}')
    cy.get('.l').eq(2).click()
    cy.contains('Пријавите се на Yahoo Mail').should('not.exist')
  })
})