// const functions = require('firebase-functions')
const MongoClient = require('mongodb').MongoClient
const MongoSetup = require('./Setup')

const mongoClient = new MongoClient(MongoSetup.MONGO_URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  bufferCommands: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
})

module.exports = mongoClient