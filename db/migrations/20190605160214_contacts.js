
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function (table) {
      table.increments()
      table.string('name', 100)
      table.string('phone', 100)
      table.string('email')
      table.text('body')
      table.boolean('newsletter')
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
};
