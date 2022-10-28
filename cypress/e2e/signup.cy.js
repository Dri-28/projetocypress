
import signup from '../pages/signupPage'
import signupFactory from '../factories/signupFactory'
//import { it } from 'faker/lib/locales'
//import signup from '../pages/signupPage'


describe('signup', () => {

/*     beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d

        })
    }) */
    it.skip('User should be deliver', function () {

        var deliver= signupFactory.deliver()

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it.skip('Incorret document', function() {

        var deliver= signupFactory.deliver()

        deliver.cpf='000000141aa'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it.skip('Incorret document', function() {

        var deliver= signupFactory.deliver()

        deliver.email='user.com.br'

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

     it('Required fields', function(){
        signup.go()
         signup.submit()
         signup.alertMessageShouldBe('É necessário informar o nome')
         signup.alertMessageShouldBe('É necessário informar o CPF')
         signup.alertMessageShouldBe('É necessário informar o email')
         signup.alertMessageShouldBe('É necessário informar o CEP')
         signup.alertMessageShouldBe('É necessário informar o número do endereço')
         signup.alertMessageShouldBe('Selecione o método de entrega')
         signup.alertMessageShouldBe('Adicione uma foto da sua CNH')

     })
})