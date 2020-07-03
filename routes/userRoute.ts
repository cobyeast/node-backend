const express = require('express')
const {
  userGet,
  userPut
} = require('../controllers/users')


// Set Router
const router = express.Router()

router
  .route('/:id')
  .get(userGet)
  .post(userPut)

module.exports = router;
export default express;