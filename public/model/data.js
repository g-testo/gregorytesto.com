var mongoose = require(‘mongoose’);
var Schema = mongoose.Schema;

var DataSchema = new Schema({
 name: String,
 text: String
});

module.exports = mongoose.model(Data, DataSchema);
