import { Request, Response, NextFunction } from 'express'

const asyncHandler = require('../middlewares/async')


export const usersGet = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  res.status(200).json({
    'success': true,
    'msg': 'usersGet'
  })

  next()

})

export const usersPut = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  res.status(201).json({
    'success': true,
    'msg': 'usersPut'
  })

  next()

})
