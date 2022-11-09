const {check} = require("express-validator");

const wordOverlapValidationRules = [
    check('mainWord')
        .exists({checkFalsy: true})
        .withMessage("The main word cannot be empty!"),
    check('overlapWord')
        .exists({checkFalsy: true})
        .withMessage("The overlapping word cannot be empty!"),

];

module.exports = {
    wordOverlapValidationRules
}
