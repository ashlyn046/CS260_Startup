const {MongoClient} = require('mongodb');

//NOTE:: if this is not working, change terminal in javascript debug terminal to zshell
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
// const userCollection = client.db('songShare').collection('user');
const songCollection = client.db('songShare').collection('song');

 function getUser(username) {
     return userCollection.findOne({ username: username });
 }

 function getUserByToken(token) {
   return userCollection.findOne({ token: token });
 }

 async function createUser(username, password) {
   // Hash the password before we insert it into the database
   const passwordHash = await bcrypt.hash(password, 10);

   const user = {
     username: username,
     password: passwordHash,
     token: uuid.v4(),
   };
   await userCollection.insertOne(user);

   return user;
 }

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

   module.exports = {
     getUser,
     getUserByToken,
     createUser,
     addSong,
     getSongs,
   };