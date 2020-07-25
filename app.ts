const express = require('express');
const path = require('path');

const fetch = require('node-fetch');
const morgan = require('morgan');

const { reqHeaders } = require('./middlewares/headers');

// Load env file
require('dotenv').config();

// Set variables
const PORT: string | number = process.env.PORT || 8001;

// Security Related
const helmet = require('helmet');
// const xss = require('xss')
const limit = require('express-rate-limit');
const hpp = require('hpp');

const app = express();

app.use(reqHeaders);

// Testing Middleware
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// Apply Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
// app.use(xss())

const limiter = limit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs
  max: 100,
  message: 'Exceeded the alotted 100 requests in your 24 hrs',
});

app.use(limiter);
app.use(hpp());

// Set up Static HTML page
app.use(express.static(path.join(__dirname, 'public')));

const auth = require('./routes/authRoute');
const users = require('./routes/userRoute');
const posts = require('./routes/postRoute');

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/posts', posts);

const server = app.listen(PORT, () => {
  console.log(
    `Server is listening in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

const knex = require('./knex/knex');

process.on('SIGTERM', (): void => {
  console.info('SIGTERM signal received');
  console.log('Closing sever');

  server.close(() => {
    console.log('http connection closed');

    // End DB connection and exit server with 0, for all is well
    knex.end();
    process.exit(0);
  });
});

export default express;
