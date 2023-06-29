var mySql = require("mysql2");

let mySqlConnection=mySql.createConnection({
    password:"Swap@1998",
    port:3306,
    user:"root",
    database:"express",
    host:'127.0.0.1'
})
mySqlConnection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("successful connection");
    }
})
module.exports=mySqlConnection;