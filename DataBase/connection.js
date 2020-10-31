var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:88170591Ga@clusterunity.5ofjs.gcp.mongodb.net/database_players?retryWrites=true&w=majority";

  MongoClient.connect(url, { useUnifiedTopology: true },(err, db)=>{
    if(err) throw err;
    console.log('Database Connected!')
    var dbo = db.db('database_players');
    var collectionUsers = dbo.collection('players');
    exports.coll={collectionUsers:collectionUsers, db:db};
  });
