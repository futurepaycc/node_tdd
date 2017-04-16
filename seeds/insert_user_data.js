
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name:'liunix',password:'123456'},
        {id: 2, name:'jack',password:'123456'},
        {id: 3, name:'asdfcom',password:'123456'}
      ]);
    });
};
