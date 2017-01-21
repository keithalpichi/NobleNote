const users = require('express').Router()

const
  single = require('./single'),
  update = require('./update'),
  destroy = require('./delete')

users
    .get('/:id', single)
    .put('/:id', update)
    .delete('/:id', destroy)

module.exports = users
