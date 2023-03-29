require('dotenv').config()
// console.log(process.env)
const { MongoClient} = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URI);


// // Se receber um objeto com um par de chave e valor, retorna um documento filtrado pelo parâmetro recebido.
// // Se não receber nenhum parâmetro, retorna todos os documentos da collection.
// const read = async (query = {}) => {
//   try {
//     const db = client.db('store')
//     const collection = db.collection('costumers')
//     const data = collection.find(query)
//     const docs = []
//     await data.forEach(doc => docs.push(doc))
//     return docs
//     // await doc.forEach(console.dir)
//   } finally {
//     client.close()
//   }
// }




// Recebe um array como argumento, e nele um objeto de propriedades para cada documento que será inserido à collection.
const create = async (query) => {
  try {
    const collection = client.db('store').collection('costumers')
    await collection.insertMany(query)

  } finally {
    client.close()
  }
}

// Atualiza um documento por vez. 
// No primeiro parâmetro, recebe um objeto com um par chave/valor, que filtrará o documento a ser atualizado.
// No segundo parâmetro, recebe um objeto, contendo a propriedade $set, cujo valor será um objeto contendo as propriedades do objeto filtrado a serem atualizadas e seus novos valores.
// No terceiro parâmetro, recebe um objeto options. Por exemplo, uma das propriedades desse objeto podera ser upsert que, caso o valor seja true, permite criar um documento com os dados passados nos parâmetros "filter" e "update", caso o filtro não consiga localizar o documento.
const update = async (filter, update, options) => {
  try {
    const collection = client.db('store').collection('costumers')
    await collection.updateOne(filter, update, options)
    console.log(`Valores atualizados:${JSON.stringify(update)}`)

  } finally {
    client.close()
  }
}


// Recebe um objeto com um par key/value e deleta o primeiro documento que contém o par de chave e valor passado como argumento.
const del = async (filter) => {
  try {
    const collection = client.db('store').collection('costumers')
    await collection.deleteOne(filter)
    console.log(`Valor deletado:${JSON.stringify(filter)}`)

  } finally {
    client.close()
  }
}





// read().then(data => console.log(data[data.length-1].cart.items))
// create([{name:'Afonso Santos', email:'contato@afonso.com', cod:'fsdjkfhds4hg', pic:'http://iudhauisdhadha.jpg', cart:{cartId: 'hdash44', date: Date(), items: [{itemName: 'Sabonete', price: 1.50, quant:2},{itemName:'Biscoito', price:4.75, quant: 1}, {itemName: 'retrovisor', price: 115, quant:3}]}}])
// update({name:'Romário Santos'}, {$set: {email:'didé@gmail.com'}}, {upsert:true})

//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
////////////////////////////////////////////////////


const read = async (coll, filter = {}) => {
  try {
    const db = client.db('store')
    const collection = db.collection(coll)
    const data = collection.find(filter)
    const docs = []
    await data.forEach(doc => docs.push(doc))
    return docs
  } finally {
    client.close()
  }
}

read('costumers', {name: 'Domingos Rodrigues'}).then(console.log)