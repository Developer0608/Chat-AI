const express = require('express');
const { trainingV1Module } = require('../controller/trainingV1ModuleCollection');
const router = express.Router();

router.post('/module/v1/request', trainingV1Module); 
module.exports = router;