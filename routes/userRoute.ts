const express = require('express')
const cors = require('cors')

const {
  usersGet,
  usersPut
} = require('../controllers/users')

// Set Router
const routers = express.Router()
const cor = cors()

routers.route('/:id')
  .get(cor, usersGet)
  .put(cor, usersPut)

module.exports = routers;
export default express;