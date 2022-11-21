const {check} = require("express-validator");

const wordOverlapValidationRules = [
    check('word1')
        .exists({checkFalsy: true})
        .withMessage("The main word cannot be empty!"),
    check('word2')
        .exists({checkFalsy: true})
        .withMessage("The overlapping word cannot be empty!"),

];

module.exports = {
    wordOverlapValidationRules
}
