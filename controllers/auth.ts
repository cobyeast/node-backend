import { Request, Response, NextFunction } from 'express'

const knex = require('../postgres/knex')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const asyncHandler = require('../middlewares/async')

require('dotenv').config()


export const regAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  interface userObj {
    first_name: string,
    last_name: string,
    password: string,
    email: string
  }

  const { 
    first_name,
    last_name,
    password,
    email
  }:userObj = req.body

  // Hash password
  const salt = await bcrypt.genSalt(12)
  const hashPass = await bcrypt.hash(password, salt)

  // JWT
  const key = process.env.GEN_KEY
  const exp = process.env.JWT_EXP

  if (password) {

    // Change to User id
    const payload: Object = { 
      pass: {
        hash: hashPass
      }
    };

    // await jwt.sign(
    //   payload,
    //   key,
    //   { expiresIn: exp },
    //   ( error:any, token:string,{} ) => {
    //     if(error) throw error;
    //     res.json({ token })
    //   }
    // )

    const user = await knex.insert({
      first_name: first_name,
      last_name: last_name,
      password: hashPass,
      email: email
    }).returning('*').into('users')

    res.status(201).json({
      'success': true,
      'msg': user
    });

  }

})

export const logAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {
  
  res.status(200).json({
    'success': true,
    'msg': 'logAuth'
  });

  next()

})