describe('Cats API', () => {
  const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
  const URLI ="https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng"
  const array = [1,2,3,4,5,6,7]
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

it('Test Finde CAT', () => {
  cy.request("GET", URLI).then((response) => {
    cy.log(response.body.length)
    expect(response.status).to.eq(200)
    expect(response.body.length).to.eq(10)
    // expect(response.body).should('have.length', 10)
  })
})

it('Test Check every key in response', () => {
  array.forEach((element) => 
  cy.request("GET", URLI).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.length).to.eq(10)
    expect(response.body[element]["id"]).to.not.be.oneOf([null, ""])
    expect(response.body[element]["url"]).to.not.be.oneOf([null, ""])
    expect(response.body[element]["width"]).to.not.be.oneOf([null, ""])
    expect(response.body[element]["height"]).to.not.be.oneOf([null, ""])
    // expect(response.body).should('have.length', 10)
  })
  );
 
})


})