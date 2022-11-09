const {validationResult } = require('express-validator');

const examineOverlap = (req, res) => {
    const {errors} = validationResult(req);

    if (errors.length) {
        res.status(422).json(errors)
    }

    const {mainWord, overlapWord} = req.body;
}

module.exports = {
    examineOverlap,
}
