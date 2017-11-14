const DbConnection = require('../db-connection').DbConnection;
const dbConnection = new DbConnection();

class ContactService{
  async  getContact(){
    try{
      const connection = await dbConnection.connect();
      const repository = await require('./contact-repository').connect(connection);
      return await repository.getContact();
    } catch(err){
      throw new Error(err);
    }
  }
}

module.exports = new ContactService();
