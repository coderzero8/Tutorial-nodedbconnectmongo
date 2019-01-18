const MongoClient = require('mongodb').MongoClient;
const url ='mongodb://localhost:27017';

const dbname= "test"

MongoClient.connect(url,{useNewUrlParser:true},(err,db)=>{
   if(err){
       return console.log("error present")
   }else{
       console.log("Mongo db connected");
   }
   db.close();

});