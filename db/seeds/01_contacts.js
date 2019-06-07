
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, name: 'Anastasia Beaverhousen', phone: '555-555-1234', email: 'monkeynipples@google.com'},
        {id: 2, name: 'Melania Trump', phone: '555-867-5309', email: 'idgaf@google.com'},
        {id: 3, name: 'Halle Berry', phone: '555-987-6543', email: 'catwoman@google.com'}
      ]);
    });
};
