require("dotenv").config()
const { ApolloServer } = require("apollo-server-express")
const express = require("express")
const app = express()
const { resolvers, typeDefs} = require("./graphql/index")
const connect = require("./db/connect")
const log = require("./logs")
const cors = require('cors')


connect.authenticate().then(() => {
    console.clear()
}).catch(err => {
    log.error("Erro no banco de dados: "+err)
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (e) => {
        if(e.message.startsWith("Telefone já cadastrado:")){
            return new Error(e.message)
        }
    }
})
app.use(cors())

server.start().then(() => {
    server.applyMiddleware({ app, path: '/' });
    
});
module.exports = app