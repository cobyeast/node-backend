import { Request, Response, NextFunction } from 'express'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const asyncHandler = require('../middlewares/async')

require('dotenv').config()


export const regAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const password:any = req.body.password

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

    await jwt.sign(
      payload,
      key,
      { expiresIn: exp },
      ( error:any, token:any ) => {
        if(error) throw error;
        res.json({ token })
      }
    );
  }

  else
    res.status(201).json({
      'success': true,
      'msg': 'regAuth'
    });

  next()

})

export const logAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {
  
  res.status(200).json({
    'success': true,
    'msg': 'logAuth'
  });

  next()

})