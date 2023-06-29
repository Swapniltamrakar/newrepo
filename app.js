var express = require("express");
var app = express();
var bodyparser=require("body-parser");
var router = require("./route/routes")
var cors = require("cors")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use(cors());
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.use("/",router);
app.listen(3004,()=>{});
module.exports=app;