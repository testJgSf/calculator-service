const { body, validationResult, param} = require('express-validator');

let solveRequestValidations = () => {
  return [
      body('operations').isArray({min: 1}).withMessage('Operarions should be an array with at least 1 operation to solve'),
      body('operations.*').blacklist(' ').customSanitizer(value => value.replace(/x/g, '*')).matches('^([-+]?[0-9]*\\.?[0-9]+[\\/\\+\\-\\*])+([-+]?[0-9]*\\.?[0-9]+)$').withMessage('Operations array must contain only valid mathematicals operations')
  ]
};

let checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    //log.error('validations /','Bad request');
    return res.status(httpBadRequest).json({message: 'Check errors for details',errors: errors.array()});
};

module.exports = { solveRequestValidations, checkValidations};