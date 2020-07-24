import { Request, Response, NextFunction } from 'express'
import trimObj from '../helper';

const knex = require('../knex/knex')
const asyncHandler = require('../middlewares/async')


interface postObj {
  id: number,
  name: string,
  text: string,
  created: string,
  user_id: null
}

export const postsGet = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const posts: postObj = await knex.select().from('posts').where({id});

  res.status(200).send(posts);

})

export const postsPut = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const {id} = req.params;

  const posts: postObj = await knex('posts').where({id}).update(trimObj(req.body));

  res.status(201).json(posts);

})

export const postsPost = asyncHandler(async(req:Request, res:Response, next:NextFunction) => {

  const posts: postObj = await knex.insert(trimObj(req.body)).returning('*').into('posts');

  res.status(201).json(posts);

})