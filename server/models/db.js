const project = require('../../config/project.config')
const mongoose = require('mongoose')

mongoose.connect(project.db_url)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to the DB')
});

module.exports = db
