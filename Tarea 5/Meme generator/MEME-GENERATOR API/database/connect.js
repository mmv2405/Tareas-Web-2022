const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.DB_URL;

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
});


function connect(){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
        if(err){
            console.log('failed to connect to database');
            reject(err);
          }else{
            console.log('conncected successfully');
            resolve(client);
          }
        });
    });
}

module.exports = connect;