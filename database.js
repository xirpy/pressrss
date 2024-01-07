const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect(process.env.database)

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
