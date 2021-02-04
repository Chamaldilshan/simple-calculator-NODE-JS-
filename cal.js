const express = require("express");
const bodyParser = require("body-parser");

const app =express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html") ;
});



app.post("/", function(req, res){


    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = Number(req.body.num3);
    var num4 = Number(req.body.num4);
    var num5 = Number(req.body.num5);
    var num6 = Number(req.body.num6);
    var num7 = Number(req.body.num7);
    var num8 = Number(req.body.num8);

    var result = num1 + num2;
    
    var result1 = num3 - num4;

    var result2 = num5 / num6;

    var result3 = num7 * num8;

    res.send("The result of the calculation of addition is :    " + result+"  The result of the calculation of subtraction is :    "+result1+
    "  The result of the calculation of division is :    " + result2 + "   The result of the calculation of multiplication is :  " + result3
    ) ;
 
 });
 


app.listen(3000, function(){
    console.log("server is running on port 3000.");
});
