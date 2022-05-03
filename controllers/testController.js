const test = (req,res) => {
    let message = req.body.message
    let convertLowerCase = message.toLowerCase()
    if(convertLowerCase === 'hello' || convertLowerCase === 'hi'){
        res.status(200).json({
            response_id: req.body.conversation_id,
            response: "Welcome StationFive."
        })
    }else if(convertLowerCase === 'goodbye' || convertLowerCase === 'bye'){
        res.status(200).json({
            response_id: req.body.conversation_id,
            response: "Thank you, see you around."
        })
    }else if(!message){
        res.status(400).json({
            response_id: req.body.conversation_id,
            response: "Sorry, I don't understand."
        })
    }else{
        res.status(400).json({
            response_id: req.body.conversation_id,
            response: "Invalid format."
        })
    }
}

module.exports = {
    test,
}