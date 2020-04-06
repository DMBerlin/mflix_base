const {gql} = require('apollo-server-express')

const Schemas = gql`
  type Query {
    findMovieByTitle(title: String): [Movies!]
  }

  type Movies {
  _id: ID
  plot: String
  genres: [String]
  runtime: Int
  cast: [String]
  num_mflix_comments: Int
  poster: String
  title: String
  fullplot: String
  languages: [String]
  released: String
  directors:[String]
  writers: [String]
  awards: Awards
  lastupdated: String
  year: Int
  imdb: IMDB
  countries: [String]
  type: String
  tomatoes: Tomatoes
  comments: [Comment!]
}

type Awards {
  wins:Int
  nominations:Int
  text:String
}

type IMDB {
  rating:Float
  votes:Int
  id:Int
}

type Tomatoes {
  viewer: Viewer
  critic: Critic
  dvd: String
  rotten: Int
  fresh: Int
  lastUpdated: String
}

  type Viewer {
    rating: Float
    numReviews: Int
    meter: Int
  }

  type Critic {
    rating: Float
    numReviews: Int
    meter: Int
  }

  type Comment {
    _id:ID
    name:String
    email:String
    movie_id:ID
    text:String
    date:String
  }
`

module.exports = Schemas