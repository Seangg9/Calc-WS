exports.addTwoNumbers = function(req, res)  {
    console.log("Received Add with parameters: " + req.body.operand1 + " and " + req.body.operand2);

    var result = (parseFloat(req.body.operand1) + parseFloat(req.body.operand2));
    
    res.header("Content-Type: application/json");
    res.send({"result" : result}); 
}

