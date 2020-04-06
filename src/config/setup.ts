const functions = require('firebase-functions')

class Setup {

  private static singleton: Setup

  private constructor (public MONGO_URI: string, public MONGO_DBNAME: string, public MONGO_COLLECTION: string) {}

  static build (MONGO_URI: string, MONGO_DBNAME: string, MONGO_COLLECTION: string) {
    if (!Setup.singleton) Setup.singleton = new Setup(MONGO_URI, MONGO_DBNAME, MONGO_COLLECTION)
    return Setup.singleton
  }

}

module.exports = Setup.build(
  process.env.MONGODB_URI || functions.config().mongodb.uri,
  process.env.MONGODB_NAME || functions.config().mongodb.name,
  process.env.MONGODB_COLLECTION || functions.config().mongodb.collection
)