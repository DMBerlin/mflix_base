// const functions = require('firebase-functions')
const MongoClient = require('mongodb').MongoClient
const {MONGO_URI} = require('./vars')

const mongoClient = new MongoClient(MONGO_URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  bufferCommands: false,
  useUnifiedTopology: true,
  useNewUrlParser: true
})

module.exports = mongoClient