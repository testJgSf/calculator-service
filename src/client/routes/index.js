var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(httpOk).json({message: 'hello'})
});

module.exports = router;
