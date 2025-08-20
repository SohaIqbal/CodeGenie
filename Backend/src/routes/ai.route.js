
import express from 'express'
import aicontroller from '../controllers/ai.cont.js'


const router = express.Router();
router.post('/get-response',aicontroller);


export default router