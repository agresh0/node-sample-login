const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/study').then(()=>{
    console.log('Mongo db connected');
})

const UserModel = mongoose.model('users',{
    userName:String,
    password:String
})

module.exports = UserModel;

