const {validationResult } = require('express-validator');

const examineOverlap = (req, res) => {
    const {errors} = validationResult(req);

    if (errors.length) {
        res.status(422).json(errors);
        return;
    }

    console.log('wow')

    const mainWordArray = req.body.mainWord.split('');
    const overlapWordArray = req.body.overlapWord.split('');

    let overlapResult = [];

    for (let letter of overlapWordArray) {
        mainWordArray.forEach((l) => {
            if (l === letter) {
                overlapResult.push(l);
                mainWordArray.shift();
            }
        });
    }

    res.status(200)
        .json(Array.from(new Set(overlapResult)));
}

module.exports = {
    examineOverlap,
}
