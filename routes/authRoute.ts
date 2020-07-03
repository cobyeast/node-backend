const express = require('express')

const {
  regAuth,
  logAuth
} = require('../controllers/auth')


// Set Routers
const routers = express.Router()

routers
  .route('/login')
  .post(logAuth)

routers
  .route('/register')
  .post(regAuth)

module.exports = routers;
export default express;