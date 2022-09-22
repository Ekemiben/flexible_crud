const express = require("express")
const router = express.Router();
const signUpTemplateCopy = require('../models/signupmodel')

router.post("/signup", (request, response)  =>{
    const signUpUser = new signUpTemplateCopy({
        fullName:Request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password
    })
    // This save the data to the database
    signUpUser.save()
    
    // This is like a try and catch block
    .then(data =>{
        response.json(data)
    })

    .catch(error =>{
        response.json(error)
    })

} )

module.exports = router;