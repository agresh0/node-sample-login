const express = require('express');
const cors = require('cors');
const UserModel = require('./db');

const app = express();

 app.use(cors({
    origin:'http://localhost:3000'
}));

app.use(express.json());


app.listen(3001,()=>{
    console.log('server started at 3001');
})

app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(user=>res.json(user))
    .catch(err => res.json(err))
})