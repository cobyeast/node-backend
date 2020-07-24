const express = require('express')
const cors = require('cors')

const {
  postsGet,
  postsPut,
  postsPost
} = require('../controllers/posts')

// Set Router
const routers = express.Router()
const cor = cors()

routers.route('/:id')
  .get(cor, postsGet)
  .put(cor, postsPut)

routers.route('')
  .post(postsPost)

module.exports = routers;
export default express;