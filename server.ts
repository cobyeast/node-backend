const express = require('express')
// const path = require('path')

// Security Related
const helmet = require('helmet')
const xss = require('xss')
const hpp = require('hpp')
const limit = require('express-rate-limit');

// Load env files
require('dotenv').config()

const PORT:string|number = process.env.PORT || 8000


const app = express()

// Apply Middlewares
app.use(express.json())
app.use(helmet())
// app.use(xss())

const limiter = limit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
})

app.use(limiter)
app.use(hpp())

// app.use(express.static(path.join(__dirname, 'public')));

const auth = require('./routes/authRoute')
const users = require('./routes/userRoute')

app.use('/api/auth', auth)
app.use('/api/users', users)

// const server:any = 
app.listen(
  PORT,
  () => { 
    console.log(`Server is listening in ${process.env.NODE_ENV} mode on port ${PORT}`) 
  }
)

process.on('unhandledRejection', (error:Error, promise: Promise<any>) => {
  console.log(`Error: ${error.message}`)
  // Need a Shutdown Function @moebius/http-graceful-shutdown
})

export default express;