const mongoose = require('mongoose');



// types of documents in the collection
const newSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    favoriteFoods : {
        type : [String]
    } 
})
// Collection user(s) exported...
module.exports = Schema = mongoose.model("user", newSchema)