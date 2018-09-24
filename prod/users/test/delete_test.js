const assert = require('assert')
const User = require('../src/user')


describe('Deleting a User', () => {
    let joe;

    beforeEach(done => {
        joe = new User({
            name: 'Joe'
        })

        joe.save().then(() => {
            done()
        })
    })

    it('model instance remove', (done) => {
        joe.remove() //remove user
            .then(() => User.findOne({name: 'Joe'})) //look for user named joe
            .then(user => { //findOne shuold return no users (null)
                assert(user === null);
                done();
            })
    })
            
    it('class method remove', done => {

    })
        
    it('class method findAndRemove', () => {
        
    })

    it('class method findByIdAndRemove', () => {

    })

    })
