const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    text: { type: String, unique: true, required: true },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Data', schema);