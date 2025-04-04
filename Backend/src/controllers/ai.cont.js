const generatecontent = require('../services/ai.service.js');

module.exports.getaicontroller= async (req,res)=>{
    const code = req.body.code;

    if(!code){
        res.status(400).send("Prompt is required");
        return;
    }

    const response = await generatecontent(code);
    res.send(response);
   
}