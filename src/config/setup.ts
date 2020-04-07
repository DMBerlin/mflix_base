require('../interfaces/SetupInterface')
const functions = require('firebase-functions')

class Setup {
  MONGO_URI: string = ''
  MONGO_DBNAME: string = ''
  MONGO_COLLECTION: string = ''

  private static singleton: Setup

  private constructor (public readonly data: SetupInterface) {
    this.MONGO_URI = data.MONGO_URI
    this.MONGO_DBNAME = data.MONGO_DBNAME
    this.MONGO_COLLECTION = data.MONGO_COLLECTION
  }

  static build (data: SetupInterface) {
    if (!Setup.singleton) Setup.singleton = new Setup(data)
    return Setup.singleton
  }

}

module.exports = Setup.build({
  MONGO_URI: process.env.MONGODB_URI || functions.config().mongodb.uri,
  MONGO_DBNAME: process.env.MONGODB_NAME || functions.config().mongodb.name,
  MONGO_COLLECTION: process.env.MONGODB_COLLECTION || functions.config().mongodb.collection
})