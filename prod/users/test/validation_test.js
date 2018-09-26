const assert = require('assert')
const User = require('../src/user')

describe('Validating Records', () => {
    it('requires a name', () => {
        const user = new User({name: undefined})
        const validationResult = user.validateSync()
        const message = validationResult.errors.name.message

        assert(message === 'Name is required') 
    })
    
    it('requires a user name be longer than 2 characters', () => {
        const user = new User({name: 'Al'})
        const validationResult = user.validateSync()
        const message = validationResult.errors.name.message
        
        assert(message === 'Name must be longer than 2 characters')
    })
    
    it('disallows saving invalid records', () => {
        const user = new User({name: 'Al'})
        user.save().catch( () => {
            const message = validationResult.errors.name.message

            assert(message === 'Name must be longer than 2 characters')
        })
    })
})