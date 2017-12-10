// repository.js

// factory function, that holds an open connection to the db,
// and exposes some functions for accessing the data.

function repository(db){
  const subscription = db.collection('subscription');
  async function postSubscription(document){
    try{
      return await subscription.insertOne(document);
    } catch(err) {
      throw new Error(err);
    }
  }
  const disconnect = () => {
    db.close()
  }
  return Object.create({
    postSubscription,
    disconnect
  });
}

async function connect(connection){
  try {
    if(!connection){
      throw new Error('connection db not supplied');
    }
    return await repository(connection);
  } catch(err){
    throw new Error(err);
  }
}
// this only exports a connected repo
module.exports = Object.assign({}, {connect})

