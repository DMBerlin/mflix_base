const {ApolloServer} = require('apollo-server-express')
const express = require('express')
const resolvers = require('./resolvers/Resolvers')
const typeDefs = require('./schemas/typeDefs')
const database = require('../config/MongoClient')

function configurationServer () {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
    formatError: (error: any) => ({
      name: error.name,
      message: error.message
    }),
    context: async ({request}: any) => {
      return {
        request,
        database
      }
    }
  })

  apolloServer.applyMiddleware({app, path: '/', cors: true})

  return app
}

module.exports = configurationServer
