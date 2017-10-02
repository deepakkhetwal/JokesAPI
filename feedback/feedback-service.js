const DbConnection = require('../db-connection');
const dbConnection = new DbConnection();
const moment = require('moment');
class FeedbackService{
  async  postFeedback(options){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./feedback-repository').connect(connection);
      let document = {
        "user_email": options.user_email,
        "description": options.description,
        "contact_no": options.contact_no,
        "date_created": moment.utc().format()
      }
      return await repository.postFeedback(document);
    } catch(err){
      throw new Error(err);
    }
  }
}

module.exports = new FeedbackService();
