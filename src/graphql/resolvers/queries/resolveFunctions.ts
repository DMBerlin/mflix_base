const {MONGO_DBNAME, MONGO_COLLECTION} = require('../../../config/setup')

const ResolverFunctions = {
  findMovieByTitle: async (parent: any, {title}: any, {database, request}: any, info: any) => {
    const param = title || request.body.variables.title
    try {
      return new Promise((resolve, reject) => {
        database.connect((err: Error) => {
          if (err) reject(err)
          database.db(MONGO_DBNAME).collection(MONGO_COLLECTION).aggregate([
            {
              $match: {
                'title': {$regex: param}
              }
            },
            {
              $lookup: {
                from: "comments",
                localField: "_id",
                foreignField: "movie_id",
                as: "comments"
              }
            }
          ])
            .toArray((error: Error, docs: any) => {
              database.close()
              if (error) reject(error)
              resolve(docs)
            })
        })
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

module.exports = ResolverFunctions
