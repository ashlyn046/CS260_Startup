const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const songCollection = client.db('songshare').collection('song');

function addSong(song) {
    songCollection.insertOne(song);
}

function getSongs() {
    const query = {};  // an empty query to retrieve all songs
    const options = {
      sort: {$natural: -1},  // sort by natural order in descending order. this puts newest first
    };
    const cursor = songCollection.find(query, options);
    return cursor.toArray();
  }

module.exports = {addSong, getSongs};