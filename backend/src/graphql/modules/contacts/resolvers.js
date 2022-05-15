const Contacts = require("../../../db/models/contact")
const log = require("../../../logs")

const user = {
    name: "Leodeymison",
    permission: "ADMIN"
}

module.exports = {
    Query: {
        contacts(){
            log.info(`Consulta em contacts. | User: ${user.name} | Permission: ${user.permission} |`)
            return Contacts.findAll()
        },
        contact(_, args){
            log.info(`Consulta em contact(id: ${args.id}). | User: ${user.name} | Permission: ${user.permission} |`)
            return Contacts.findByPk(args.id)
        }
    },
    Mutation: {
        async createContact(_, args){
            const { data } = args
            // Phone duplicado
            const userCreated = await Contacts.findAll({where: {
                phone: data.phone
            }})
            if(userCreated.length !== 0){
                log.error(`Telefone já cadastrado. | User: ${user.name} | Permission: ${user.permission} |`)
                throw new Error(`Telefone já cadastrado: Usuário ${data.name}`)
            }

            log.info(`Criação em createContact. | User: ${user.name} | Permission: ${user.permission} |`)
            const contact = await Contacts.create(data)
            return contact
        }
    }
}