const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    name: String,
    email: String,
    country: String
})

const details = mongoose.model('Detail', detailSchema);

module.exports = details;