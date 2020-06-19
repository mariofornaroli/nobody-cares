var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var SentenceSchema = new Scheme({
    sentence : String,
    sentence_author : String,
    creation_date : Date
})

module.exports = mongoose.model('Sentence', SentenceSchema);