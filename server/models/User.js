const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({ varone: Number, vartwo: Number, varthree: String, varfour: String });
module.exports = mongoose.model('User', BookSchema);