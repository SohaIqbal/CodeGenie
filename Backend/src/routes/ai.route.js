const express = require('express');
const router = express.Router();
const generateContent = require('../services/ai.service');
const aicontoller = require('../controllers/ai.cont');



router.post('/get-response',aicontoller.getaicontroller);



module.exports = router;