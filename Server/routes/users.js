var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/object', function(req, res, next) {

    console.log("reached here");
    // console.log(req.body);
    console.log(req.body.basic_info.work);

    var obj = {
      message: "we received your object"
    };

    res.json(obj);
});

router.post('/blob', function(req, res, next) {

    console.log("reached here");
    console.log(req.body);

    var obj = {
        message: "we received your blob"
    };

    res.json(obj);
});

module.exports = router;
