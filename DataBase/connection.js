var MongoClient = require('mongodb').MongoClient;
var url = process.env.DATABASE_CONNECTION;

  MongoClient.connect(url, { useUnifiedTopology: true },(err, db)=>{
    if(err) throw err;
    console.log('Database Connected!')
    var dbo = db.db(process.env.DATABASE_USER);
    var collectionUsers = dbo.collection(process.env.DATABASE_COLLECTION_ONE);
    exports.coll={collectionUsers:collectionUsers, db:db};
  });
