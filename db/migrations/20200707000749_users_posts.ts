import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  return knex.schema
  .createTable('users', (table) => {
    table.increments('id').primary()
    table.string('first_name', 100).notNullable()
    table.string('last_name', 100).notNullable()
    table.string('password', 100).notNullable()
    table.string('email').unique().notNullable()
    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
  })
  .createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('text', 300).notNullable()
    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.integer('user_id').references('id').inTable('users')
  })
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema
  .dropTable('users')
  .dropTable('posts')
}


