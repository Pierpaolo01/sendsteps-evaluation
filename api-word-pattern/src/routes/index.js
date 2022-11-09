const { Router } = require("express");

const {examineOverlap} = require("../controllers/overlap.controllers.js");
const {wordOverlapValidationRules} = require("../service/overlap.validation.js");

const routes = Router();


routes.post('/word-overlap', wordOverlapValidationRules, examineOverlap);

module.exports = routes;
