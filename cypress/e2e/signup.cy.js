import signup from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d

        })
    })
    it('User should be deliver', function () {

        signup.go();
        signup.fillForm(this.deliver.signup);
        signup.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorret document', function() {
        signup.go();
        signup.fillForm(this.deliver.cpf_inv);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})