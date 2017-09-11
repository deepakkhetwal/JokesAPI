const config= require('config');
const dbConfig = config.get('Jokes.dbConfig');
const MongoClient = require('mongodb').MongoClient;
let dbConnection;
class DbConnection {
  async connect(){
    if(!dbConnection){
      dbConnection = await MongoClient.connect(dbConfig);
    }
    return dbConnection;
  }
};
module.exports = DbConnection;