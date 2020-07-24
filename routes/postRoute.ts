const express = require('express');
const cors = require('cors');

const { postsGet, postsPut, postsPost } = require('../controllers/posts');

// Set Router
const routers = express.Router();

// Apply Cors Middleware
const cor = cors();

routers
  .route('/:id') // Uses a parameter <:id> of the user object
  .get(cor, postsGet)
  .put(cor, postsPut);

routers.route('').post(postsPost);

module.exports = routers;
export default express;
