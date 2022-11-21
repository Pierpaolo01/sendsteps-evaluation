const {validationResult } = require('express-validator');

const examineOverlap = (req, res) => {
    const {errors} = validationResult(req);

    if (errors.length) {
        res.status(422).json(errors);
        return;
    }

    const { word1, word2 } = req.body

    const mainWordArray = word1.length > word2.length
        ? word1.split('')
        : word2.split('');

    const overlapWordArray = word1.length < word2.length
        ? word1.split('')
        : word2.split('');

    let overlapResult = [];

    for (let letter of overlapWordArray) {
        mainWordArray.forEach((l) => {
            if (l === letter) {
                overlapResult.push(l);
                mainWordArray.shift();
            }
        });
    }

    res
        .status(200)
        .json(Array.from(new Set(overlapResult)));
}

module.exports = {
    examineOverlap,
}
