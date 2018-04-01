require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller');



const {
  SERVER_PORT,
  CONNECTION_STRING
} = process.env;


//Top-level middleware
const app = express();

app.use(bodyParser.json());
app.use(cors());


//connecting server to database using massive
// const db = app.get('db')
massive( CONNECTION_STRING ).then( db => {
  app.set('db', db);
}).catch( err => console.log(err) );


//====endpoints======
app.get("/api/shelf/:id", controller.getShelf);
app.get("/api/bin/:id", controller.getBin);
app.put("/api/bin/:id", controller.updateBin);
app.delete("/api/bin/:id", controller.deleteBin);
app.post("/api/bin/:id", controller.addBin);


app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
})

