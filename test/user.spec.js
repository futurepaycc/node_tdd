'use strict'

process.env.NODE_ENV = 'dev'

let chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
let server = require('../server')


let config = require('../knexfile.js')[process.env.NODE_ENV];

let knex = require('knex')(config)


describe('user tests', function () {

    beforeEach(async function () {
        await knex.migrate.rollback()
        await knex.migrate.latest()
        await knex.seed.run()
    })

    afterEach(async function () {
        await knex.migrate.rollback()
    })

    describe('GET /hello', function () {
        it('should return all shows', async function () {
            let res = await chai.request(server).get('/hello')
            res.body.result.should.equal(true)
        })
    })

})
