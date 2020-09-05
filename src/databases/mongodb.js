const { MongoClient } = require('mongodb');

const { MONGODB_URL = 'mongodb://localhost:27017/deutsch' } = process.env;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
    db: null,
    client: null,
};

exports.connect = async () => {
    const client = await MongoClient.connect(MONGODB_URL, mongoOptions);

    state.client = client;
    state.db = client.db();
};

exports.getDB = () => state.db;
exports.getClient = () => state.client;
exports.getCollection = name => state.db.collection(name);
