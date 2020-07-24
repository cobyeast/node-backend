import { Request, Response, NextFunction } from 'express'
import trimObj from '../helper'

const knex = require('../knex/knex')
const asyncHandler = require('../middlewares/async')


interface userObj {
  id: number,
  first: string,
  last: string,
  email: string,
  created: string
}

export const usersGet = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const users: userObj = await knex.select().from('posts').where({id});

  res.send(users);

})

export const usersPut = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const users: userObj = await knex('users').where({id}).update(trimObj(req.body));

  res.status(201).json(users);

})

export const usersPost = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const users: userObj = await knex.insert(req.body).returning('*').into('users');

  res.status(201).json(users);

})