const express = require('express');
const app = express();
require('dotenv').config();


//database connection
const database = require("./database");

database.authenticate().then(()=>{
     console.log("database online");
}).catch((err)=>{
     console.error(err);
});

app.get('/', (req, res) => res.send('Hello World!'))






app.listen(process.env.PORT, () => {
     console.log(`ONLINE IN ${process.env.PORT}!`)
});