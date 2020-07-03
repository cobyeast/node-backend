import { Request, Response, NextFunction } from 'express'

const asyncHandler = require('../middlewares/async')


export const regAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  res.status(201).json({
    'success': true,
    'msg': 'regAuth'
  })

  return next()

})

export const logAuth = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {
  
  res.status(200).json({
    'success': true,
    'msg': 'logAuth'
  })

  return next()

})