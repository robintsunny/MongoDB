const assert = require('assert')
const User = require('../src/user')


describe('Updating a User', () => {
            let joe;

    beforeEach(done => {
        joe = new User({
            name: 'Joe'
        })

        joe.save().then(() => {
            done()
        })
    })




    it('instance set n save', done => {
        joe.set({name:'Alex'}).save()
        .then( () => User.find({})) //finds all users, no criteria was passed in
        .then( users =>  {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done()
        })
    })



    it('a model instance can update', done => {
        joe.update({name: 'Alex'})
        .then( () => User.find({})) //finds all users, no criteria was passed in
        .then( users =>  {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done()
        })
    })



})