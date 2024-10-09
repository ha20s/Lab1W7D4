const mongoose = require("mongoose");
const { Schema } = mongoose;


const booksSchema = new Schema({
    name : String, 
    author : String ,
    editionNumber : String,
    publicDate : Date , 
    isAvailable : Boolean, 
    price: String,  
    languages: [String],
    classification : String

}, {timestamps:true})

const Books = mongoose.model('Books', booksSchema)

module.exports = Books;
