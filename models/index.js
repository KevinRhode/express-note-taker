const User = require('./User');
const Note = require('./Note');

User.hasMany(Note);

module.exports = { User, Note };
