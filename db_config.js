'use strict'

let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./db_dev"
    }
});

let bookshelf = require('bookshelf')(knex);

// let User = bookshelf.Model.extend({tableName: 'users'})
module.exports = {
    SQL:knex,
    ORM:bookshelf
}