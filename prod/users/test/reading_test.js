const assert = require('assert')
const User = require('../src/user')

describe('reads users form db', () => {
    beforeEach((done) => {
        joe = new User({
            name: 'Joe'
        });
        mark = new User({
            name: 'Mark'
        })
        joe.save().then( () => {
            done()
        })

    })

    it('finds all users named joe', (done) => {
        User.find({name: 'Joe'}).then( users => {
            assert(users[0]._id.toString() === joe._id.toString())
            done();
        })
    })

    it('finds a user with a particular id', done => {
        User.findOne({_id: joe._id}).then(user => {
            assert(user.name === 'Joe');
            done();
        })
    })

})