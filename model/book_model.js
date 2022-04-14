//requiring mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//creating new Schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    year: { type: Number, required: true},
    quantity: { type: Number, required: true},
    imageURL: { type: String, required: true}
})

//exporting
const Book = mongoose.model('Book', bookSchema)
module.exports = Book