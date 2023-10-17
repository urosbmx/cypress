describe('template spec', () => {
  const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
  it('Test GET ELEMENTS', () => {
    cy.request("GET", URL).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[1]["id"]).to.not.be.oneOf([null, ""])
    })

    
    
  })
  it('Test COUNT elements', () => {
    cy.request("GET", URL).then((response) => {
      cy.log(response.body.length)
      expect(response.status).to.eq(200)
      expect(response.body.length).to.eq(10)
      // expect(response.body).should('have.length', 10)
    })

    
    
  })
})