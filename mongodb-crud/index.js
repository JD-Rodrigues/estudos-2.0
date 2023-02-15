
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://domingosrodrigues:readyplayer1@cluster0.c9afncg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const query = async (query) => {
  try {
    const collection = client.db('store').collection('costumers')
    const doc = await collection.findOne(query)
    console.log(doc)
  } finally {
    client.close()
  }
}

// query({name:'Domingos Rodrigues'}).catch(console.log)