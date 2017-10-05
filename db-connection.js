const config= require('config');
const dbConfig = config.get('Jokes.dbConfig');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectId;
let dbConnection;
class DbConnection {
  async connect(){
    if(!dbConnection){
      dbConnection = await MongoClient.connect(dbConfig);
    }
    return dbConnection;
  }
};
module.exports = {
  DbConnection,
  objectId
};