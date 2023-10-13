const express = require("express");
const ConnectToMongo = require("./db");
const Empolyeeschema = require("./model/empSchema");

const app = express();
const port = 3000;
app.use(express.json());


const emproute = require('./Route/emprouter')
app.use('/api/employee', emproute);





ConnectToMongo();
app.listen(port,()=>{
    console.log(`app is listenning on port localhost:${port}`);
})