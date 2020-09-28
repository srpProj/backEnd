// import express JS module into app 
// and creates its variable. 
var express = require('express'); 
var app = express(); 
var bodyParser=require('body-parser');
let cors=require('cors');
app.use(cors({
  origin:"*"
}));
app.use(bodyParser.json());

  
// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  
// this will prevent the timeout 

app.get("/",function(req,res){
    res.send("Local server is working!");
});
// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
app.post('/', callName); 
  
function callName(req, res) { 

   /* let one1=Number(req.params.one);
    let two1=Number(req.params.two);
    let three1=Number(req.params.three);
    let four1=parseFloat(req.params.four);
    let five1=parseFloat(req.params.five);
    let six1=Number(req.params.six);
    let seven1=Number(req.params.seven);
    let eight1=parseFloat(req.params.eight);
    let nine1=Number(req.params.nine);
    let ten1=parseFloat(req.params.ten);
    let eleven1=parseFloat(req.params.eleven);
    let twelve1=parseFloat(req.params.twelve);
    let thirteen1=parseFloat(req.params.thirteen);*/
    let one1=req.body.age;
    let two1=req.body.sex;
    let three1=req.body.cp;
    let four1=req.body.trestbps;
    let five1=req.body.chol;
    let six1=req.body.fbs;
    let seven1=req.body.restecg;
    let eight1=req.body.thalach;
    let nine1=req.body.exang;
    let ten1=req.body.oldpeak;
    let eleven1=req.body.slope;
    let twelve1=req.body.ca;
    let thirteen1=req.body.thal;
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    var process = spawn('python',["./test.py",one1,two1,three1,four1,five1,six1,seven1,eight1,nine1,ten1,eleven1,twelve1,thirteen1] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
} 
  
// save code as start.js