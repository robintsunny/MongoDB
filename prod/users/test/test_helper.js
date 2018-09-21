
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/users_test')
// mongoose.connect('mongodb://localhost/users_test');

mongoose.connection
    .once('open',() => console.log('GOOD TO GO'))
    .on('error', error => {
        console.warn(error)
    })




// mongoose.connection
//     .once('open', () => console.log('Good to go!'))
//     .on('error', (error) => {
//         console.warn('Warning', error);
//     });