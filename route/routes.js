	var express = require("express");
var router = express.Router();
var connection = require("../db/db")

router.get("/employee",(req,resp)=>{
    connection.query("select * from employee",(err,data)=>{
        if(err){
            resp.status(500).send("Error"+JSON.stringify(err));
        }
        else{
            resp.send(data);
        }
    })
})
router.post("/add",(req,resp)=>{
    var name=req.body.ename;
    var dept=parseInt(req.body.deptNo);
    var sal=parseFloat(req.body.sal);
    connection.query("insert into employee values(?,?,?)",[name,parseInt(dept),sal],(err,res)=>{
        if(err){
            resp.status(500).send("error"+JSON.stringify(err));
        }else{
            resp.redirect("/employee");
        }
    })
})
router.get("/update/:dpt",(req,resp)=>{
    var name = req.body.ename;
    var sal = req.body.sal;
    connection.query("update employee set ename=?,sal=? where deptNo=?",[name,sal,req.params.dpt],(err,data)=>{
        if(err){
            resp.status(500).send("ERROR"+JSON.stringify(err));
        }else{
            console.log("success")
            resp.send(data)
        }
    }) 
})
router.get("/delete/:dpt",(req,resp)=>{
    connection.query("delete from employee where deptNo=?",[parseInt(req.params.dpt)],(err,data)=>{
        if(err){
            response.status(500).send("Error"+JSON.stringify(err))
        }else{
            resp.send(data)
        }
    })
})
module.exports = router;