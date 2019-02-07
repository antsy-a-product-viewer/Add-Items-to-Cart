const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:3001';

const dbName = 'storeItems';

MongoClient.connect(url, function(err, client){
  assert.equal(null, err);

  const db = client.db(dbName);
  client.close();
})