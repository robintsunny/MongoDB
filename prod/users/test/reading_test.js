const assert = require('assert')
const User = require('../src/user')

describe('reads users form db', () => {
    let joe, maria, alex, zack

    beforeEach((done) => {

        joe = new User({
            name: 'Joe'
        });
        maria = new User({
            name: 'Maria'
        });
        alex = new User({
            name: 'Alex'
        });
        zack = new User({
            name: 'Zack'
        });



        Promise.all([joe.save(),
        maria.save(),
        alex.save(),
        zack.save()])
        .then( () => done())

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

    it('can skip and limit the result set', () => {
        User.find({})
            .sort({name: 1}) //sort name in asc, -1 is desc
            .skip(1)
            .limit(2)
            .then(users => {
                assert(users[0].name === 'Joe')
                assert(users[1].name === 'Maria')
                assert(users.lenght === 2)
                done()
            })
    })
})