const express = require('express');
const app = express()
const cors = require('cors')


app.use(express.json());

app.use(cors());

app.listen(3000, ()=>{
    console.log('running')
});

app.get('/juan', (requests, response)=>{
    try{
       response.status(200).send({message: 'everything alright'}); 
    }catch(err){
        console.error(err);
    }
})

const pablo = '123'