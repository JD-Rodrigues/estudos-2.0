
const { MongoClient} = require('mongodb');

const uri = "mongodb+srv://domingosrodrigues:readyplayer1@cluster0.c9afncg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const read = async (query = {}) => {
  try {
    const db = client.db('store')
    const collection = db.collection('costumers')
    const doc = collection.find(query)
    await doc.forEach(console.dir)
  } finally {
    client.close()
  }
}

const create = async (query) => {
  try {
    const collection = client.db('store').collection('costumers')
    await collection.insertOne(query)

  } finally {
    client.close()
  }
}


// run().catch(console.dir);

read()
// create({name:'Sarah Tatyane', email:'contato@taty.com', cod:'dahdjkhjfk0'})
