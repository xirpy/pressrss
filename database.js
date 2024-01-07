const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Schema = mongoose.Schema
mongoose.connect(process.env.database, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log("Erro ao se conectar com a database!\n" + err)
  console.log('Database conectada!')
})

const info = new Schema({
  _id: {
    type: String
  },
  json: {
    type: String
  }
})

const infos = mongoose.model('infos', info);
exports.infos = infos
