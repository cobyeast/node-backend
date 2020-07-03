const express = require('express')

const {
  authReg,
  authLog
} = require('../controllers/auth')


// Set Router
const router = express.Router()

router
  .route('/register')
  .post(authReg)

router
  .route('/login')
  .post(authLog)

module.exports = router;
export default express;