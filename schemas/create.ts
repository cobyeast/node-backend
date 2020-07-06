exports.up = function(knex:any, Promise:any) {
  return knex.schema.createTable('sticker', (table:any) => {
    table.increments();
    table.text('description').notNullable();
    table.integer('quantity').notNullable().defaultTo(0);
    table.text('size');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex:any, Promise:any) {
  return knex.schema.dropTableIfExists('sticker');
};