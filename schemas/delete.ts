exports.up = function(knex:any, Promise:any) {
  return knex.schema.table('user', (table:any) => {
    table.dropColumn('date');
    table.datetime('created_at');
  });
};

exports.down = function(knex:any, Promise:any) {
  return knex.schema.table('user', (table:any) => {
    table.dropColumn('created_at');
    table.datetime('date');
  });
};
