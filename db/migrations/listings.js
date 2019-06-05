exports.up = knex => {
    return knex.schema.createTable('listings', function (table) {
        table.increments()
        table.string('address', 100)
        table.string('listPrice', 100)
        table.integer('beds')
        table.integer('baths')
        table.string('description')
        table.string('imgUrl', 500)
        table.boolean('sold')
        table.integer('sqfoot')
        table.integer('sqlot')
        table.timestamps(true, true)
    })
}
exports.down = knex => {
    return knex.schema.dropTable('users')
}
