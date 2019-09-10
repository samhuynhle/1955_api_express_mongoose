const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1995db', {useNewUrlParser: true});

const PeopleSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;