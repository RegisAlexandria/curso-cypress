/// <reference types="cypress" />

describe('Should teste at a functional level', () => {

    before(() => {

        //cy.login('regisnena@regisnena', 'regisnena')                
    })

    beforeEach(() => {
        //cy.resetApp()
    })

    it('Should create an account', () => {
        cy.request({
            method: "POST",
            url: "https://barrigarest.wcaquino.me/signin",
            body: {
                email: "regisnena@regisnena",
                redirecionar: false,
                senha: "regisnena"
            }
        }).its('body.token').should('not.be.empty')
        .then(token => {
            cy.request({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'POST',
            headers: {Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta via Rest'
            }
            }).as('response')
        })

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via Rest')
        })
    })

    it('Should update an account', () => {

    })

    it('Should not create an account with same name', () => {


    })

    it('Should create a transaction', () => {

    })

    it('Should get balance', () => {

    })

    it('Should remove a transaction', () => {



    })
})