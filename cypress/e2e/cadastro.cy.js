import signup from '../pages/SignupPage'

describe('Cadastro',()=>{
    it('Usuário deve s tornar um entregador',()=>{
        
        var deliver={
            name:'Fernando Papito',
            cpf:'00000014141',
            email:'papito@hotmail.com',
            whatsapp:'11999999999',
            adress:{
                postalcode:'13031740',
                street:'Rua Dois Córregos',
                number:'274',
                details:'Casa',
                district:'Jardim Dom Nery',
                city_state:'Campinas/SP'
            },
            delivery_method:'Moto',
            cnh:'cnh-digital.jpg'
        }

       

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        const expectedMessage='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF',()=>{
        var deliver={
            name:'Fernando Papito',
            cpf:'00000014141AA',
            email:'papito@hotmail.com',
            whatsapp:'11999999999',
            adress:{
                postalcode:'13031740',
                street:'Rua Dois Córregos',
                number:'274',
                details:'Casa',
                district:'Jardim Dom Nery',
                city_state:'Campinas/SP'
            },
            delivery_method:'Moto',
            cnh:'cnh-digital.jpg'
        }

        

        signup.go();
        signup.fillForm(deliver);
        signup.submit();
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
})