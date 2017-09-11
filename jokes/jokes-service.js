const DbConnection = require('../db-connection');
const dbConnection = new DbConnection();
async function getJokes(){
  try{

    const connection = await dbConnection.connect();
    const repository = await require('./jokes-repository').connect(connection);
    return await repository.getJokes();
  } catch(err){
    throw new Error(err);
  }
}

module.exports = {
  getJokes
}