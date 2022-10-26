var faker = require('faker')
var cpf =require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName=faker.name.firstName()
        var lastName=faker.name.lastName()

        var data = {
            name:`${firstName} ${lastName}`,
            cpf:cpf.generate(),
            email:faker.internet.email(firstName),
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
    return data
}}