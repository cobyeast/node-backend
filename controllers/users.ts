import { Request, Response, NextFunction } from 'express'

const knex = require('../postgres/knex')

const asyncHandler = require('../middlewares/async')


export const usersGet = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params

  const posts = await knex.select().from('posts').where({id})
  res.send(posts)

})

export const usersPut = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const { id } = req.params;

  const { 
    name,
    text
  } = req.body

  res.status(201).json({
    'success': true,
    'msg': 'usersPut'
  })

  next()

})

export const usersPost = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const { 
    name,
    text,
    user_id
  } = req.body

  const data = await knex.insert(req.body).returning('*').into('posts')

  res.status(201).send(data)
    // 'success': true,
    // 'name': name,
    // 'text': text,
    // 'user_id': user_id

})