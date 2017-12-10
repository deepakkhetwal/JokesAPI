const DbConnection = require('../db-connection').DbConnection;
const dbConnection = new DbConnection();
const moment = require('moment');
class SubscriptionService{
  async  postSubscription(options){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./subscription-repository').connect(connection);
      let document = {
        "user_email": options.user_email,
         "date_created": moment.utc().format()
      }
      return await repository.postSubscription(document);
    } catch(err){
      throw new Error(err);
    }
  }
}

module.exports = new SubscriptionService();
