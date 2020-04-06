const functions = require('firebase-functions')

function build () {
  return {
    MONGO_URI: process.env.MONGODB_URI || functions.config().mongodb.uri,
    MONGO_DBNAME: process.env.MONGODB_NAME || functions.config().mongodb.name,
    MONGO_COLLECTION: process.env.MONGODB_COLLECTION || functions.config().mongodb.collection
  }
}

module.exports = build()