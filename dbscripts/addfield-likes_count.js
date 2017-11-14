
const DBConnection = require('../db-connection').DbConnection;
const dbconnection = new DBConnection();
dbconnection.connect()
  .then(db => {
    const jokes = db.collection('jokes');
    jokes.update({}, {$set: {likes_count: 0}}, {multi: true});
    jokes.find().forEach( function (doc) {
      let likesCount;
      !doc.likes ? likesCount =0 : likesCount = doc.likes.length;
      doc.likes_count = likesCount;
      jokes.save(doc);
    });
    console.log('likesCount filed added and records update completed successfully');
    //process.exit();
})
.catch(err => {
  console.log(err);
  process.exit();
});
