const DbConnection = require('../db-connection');
const dbConnection = new DbConnection();
const moment = require('moment');
class JokesService{
  async  getReviewedJokes(){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./jokes-repository').connect(connection);
      return await repository.getReviewedJokes();
    } catch(err){
      throw new Error(err);
    }
  }
  async  incrementLikesCount(){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./jokes-repository').connect(connection);
      return await repository.incrementLikesCount();
    } catch(err){
      throw new Error(err);
    }
  }
  async  postJokes(options){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./jokes-repository').connect(connection);
      const document = {
        "user_email": options.user_email,
        "description": options.description,
        "comments": [],
        "jokes_category": options.jokes_category,
        "date_created": moment.utc().format(),
        "likes_count": 0,
        "is_reviewed": false
      }
      return await repository.postJokes(document);
    } catch(err){
      throw new Error(err);
    }
  }
}

module.exports = new JokesService();
