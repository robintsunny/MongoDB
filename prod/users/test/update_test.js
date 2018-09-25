const assert = require('assert')
const User = require('../src/user')


describe('Updating a User', () => {
            let joe;

    beforeEach(done => {
        joe = new User({
            name: 'Joe',
            postCount: 0
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


    it('A model class can update', done => {
        User.update({name: 'Joe'}, {name: 'Alex'})
        .then( () => User.find({})) //finds all users, no criteria was passed in
        .then( users =>  {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done()
        })
    })

    it('A model class can update one record', done => {
        User.updateOne({name: 'Joe'}, {name: 'Alex'})
        .then( () => User.find({})) //finds all users, no criteria was passed in
        .then( users =>  {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done()
        })
    })

    it('A model class can update a record by id', done => {
        User.findByIdAndUpdate(joe._id, {name: 'Alex'})
        .then( () => User.find({})) //finds all users, no criteria was passed in
        .then( users =>  {
            assert(users.length === 1);
            assert(users[0].name === 'Alex');
            done()
        })
    })


    it('A user can have their postcount incremented by 1', done => {
        User.update({ name: 'Joe' }, { $inc: { postCount: 10 } })
        .then(() => User.findOne({ name: 'Joe' }))
        .then((user) => {
            assert(user.postCount === 10);
            done()
        });
    });
})