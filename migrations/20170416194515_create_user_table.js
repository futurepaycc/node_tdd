
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user',function(table){
      table.increments()
      table.string('name')
      table.string('password')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
