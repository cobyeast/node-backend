const knex = require('../postgres/knex')

exports.up = function(knex:any, Promise:any) {
  return knex.schema.createTable('user', (table:any) => {
    table.increments();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.datetime('date').notNullable();
    table.boolean('is_active').notNullable().defaultTo(true);
  });
};

exports.down = function(knex:any, Promise:any) {
  return knex.schema.dropTableIfExists('user');
};