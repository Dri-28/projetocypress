describe('Cadastro',()=>{
    it('Usuário deve s tornar um entregador',()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

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

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"').type(deliver.adress.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.details)

        cy.get('input[name="address"]').should('have.value',deliver.adress.street)
        cy.get('input[name="district"]').should('have.value',deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.adress.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/'+deliver.cnh)

        cy.get('form button[type="submit"]').click()

        const expectedMessage='Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato'

        cy.get('.swal2-container .swal2-html-container')
           .should('have.text',expectedMessage)
        


    })

    it('CPF',()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

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
 
        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"').type(deliver.adress.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.details)

        cy.get('input[name="address"]').should('have.value',deliver.adress.street)
        cy.get('input[name="district"]').should('have.value',deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.adress.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()



        cy.get('input[accept^="image"]').attachFile('/images/'+deliver.cnh)

        cy.get('form button[type="submit"]').click()

         cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')


    })
})