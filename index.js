const express=require('express');
const bodyParser=require('body-parser');
const mongoClient=require('mongodb').MongoClient;

const app = express();
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
if(err){
   return console.log('cannot connect to mongodb');
}
console.log('connected to mongodb');
});

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/index.html');
})

app.post('/quotes', (req,res) => {
console.log(req.body);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})