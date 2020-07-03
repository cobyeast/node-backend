const express = require('express')

const {
  usersGet,
  usersPut
} = require('../controllers/users')


// Set Router
const routers = express.Router()

routers.route('/:id')
  .get(usersGet)
  .put(usersPut)

module.exports = routers;
export default express;