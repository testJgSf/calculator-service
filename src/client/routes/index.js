var express = require('express');
var router = express.Router();
const { processOperation } = require('../../business/calculatorController');

router.post('/calculate', function(req, res) {
  let result = processOperation(req, res);
  res.status(result.code).json(result);
});

module.exports = router;
