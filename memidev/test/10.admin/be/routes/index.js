var express = require('express');
var router = express.Router();

router.use('/api', require('./api'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('router인덱스');
});

module.exports = router;