// repository.js

// factory function, that holds an open connection to the db,
// and exposes some functions for accessing the data.

function repository(db){
  const jokes = db.collection('jokes');
  async function getReviewedJokes(){
    try{

      return await jokes.find({is_reviewed: true}, {description:1, likes_count: 1}).sort({date_created:-1}).toArray();
    } catch(err) {
      throw new Error(err);
    }
  }

  async function postJokes(document){
    try{

      return await jokes.insertOne(document);
    } catch(err) {
      throw new Error(err);
    }
  }

  async function incrementLikesCount(id){
    try{

      return await jokes.update({
          _id: id
        },
        {
          $inc: {likes_count: 1}
        })
    } catch(err) {
      throw new Error(err);
    }
  }
  const disconnect = () => {
    db.close()
  }

  return Object.create({
    getReviewedJokes,
    incrementLikesCount,
    postJokes,
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

