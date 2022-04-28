const express = require('express');
const app = express();

app.use(express.json())

app.post('/api/v1/test', function(req,res){
    let message = req.body.message
    const keyReg = /^[A-Z]\-[0-9]{2}\-[0-9]{2}[A-Z]?$/
    if(message.includes('Hello') || message.includes('Hi')){
        res.status(200).json({
            response_id: req.body.conversation_id,
            response: "Welcome StationFive."
        })
    }
    if(message.includes('Goodbye') || message.includes('bye')){
        res.status(200).json({
            response_id: req.body.conversation_id,
            response: "Thank you, see you around."
        })
    }    
    if(message === ''){
        res.status(422).json({
            response_id: req.body.conversation_id,
            response: "Sorry, I don’t understand."
        })
    }
    if(!keyReg.test('Hello') || !keyReg.test('Hi')){
        res.status(401).json({
            error: "Invalid format"
        })
    }
    if(!keyReg.test('Goodbye') || !keyReg.test('bye')){
        res.status(401).json({
            error: "Invalid format"
        })
    }
});
const port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`Server running at port ${port}....`);
});