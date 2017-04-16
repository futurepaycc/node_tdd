'use strict'

const DB_CONFIG = require('./db_config.js')
const SQL = DB_CONFIG.SQL
const ORM  = DB_CONFIG.ORM

const USER = ORM.Model.extend({tableName:"user"})

module.exports = {
    async findUserByNamePassword(name,password){
        return await new USER({name:name,password:password}).fetch()
    }
}