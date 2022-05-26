const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'S7even';

async function createConnection() {
    let result = await client.connect();
    db = result.db(database);
    return db.collection('users');
}

module.exports = createConnection;