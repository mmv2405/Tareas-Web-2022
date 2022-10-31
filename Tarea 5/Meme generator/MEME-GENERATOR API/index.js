const express = require('express');
require('dotenv').config();
const database = require('./database');
const apiRoutes = require('./src/users/routes');

const app = express();

const port = process.env.port || 3000;

app.use('/api', apiRoutes);

app.get('', async (req, res)=>{
    const collection = database.db().collection('users');
    const users = await collection.find({}).toArray();

    res.send(users)
})


database.connect().then(client => {

  const db = client.db('memegenerator');
  database.db(db);

  app.listen(port, () => {
    console.log('app is running on port ' + port);
    
  });
}).catch(err => {
  console.log('failed to connect')
  console.log(err);
});


