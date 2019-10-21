const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/myRestApi');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'mogodb connection error'))

db.once('open',()=>{
console.log('successfully connected to db')
} )

module.exports = db;