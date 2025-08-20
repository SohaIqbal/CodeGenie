import generateContent from '../services/ai.service.js';
const getaicontroller= async (req,res)=>{
    const code = req.body.code;

    if(!code){
        res.status(400).send("Prompt is required");
        return;
    }

    const response = await generateContent(code);
    res.send(response);
   
}
export default getaicontroller;
