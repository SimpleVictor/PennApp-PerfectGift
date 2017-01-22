var express = require('express');
var router = express.Router();
var fs = require('fs');


//this is nothing for now...
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.post('/object', function(req, res, next) {
    console.log(req.body);

    //Write to the file
    var content = JSON.stringify(req.body);
    fs.writeFile("DataObject.txt", content, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

    //Send Data back to the front end
    var obj = {
      message: "we received your object"
    };
    res.json(obj);
});

//Send Blob Or File to Firebase
router.post('/blob', function(req, res, next) {
    console.log("Send Blob to Firebase");
    console.log(req.body);
    var obj = {
        message: "we received your blob"
    };
    res.json(obj);
});

module.exports = router;
