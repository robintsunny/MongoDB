const assert = require('assert')
const User = require('../src/user')

describe('creating records', () => {
    it('saves a user', () => {
        const joe = new User({
            name: 'Joe'
        });

        joe.save();

    });
});