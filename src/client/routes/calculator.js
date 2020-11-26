let express = require('express');
let router = express.Router();
let { main } = require('../../business/calculatorController');
let { solveRequestValidations, checkValidations} = require('../../business/utils/solveRequestValidations');
router.post('/calculate',[solveRequestValidations(), checkValidations], async (req, res) => {
  let result = await main(req.body.operations);
  res.status(result.code).json(result);
});

module.exports = router;
