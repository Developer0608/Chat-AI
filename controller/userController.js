const User = require("../models/UserModal");
const jwt = require('jsonwebtoken');

const signUpHandler = async (req, res) => {
    const {username, password, email} = req.body;
    const userDetails = await User.findOne({email}).lean();
    if(userDetails) 
        return res.status(200).json({
            success : false,
            message : 'Email already exists'
        })

    const userObject = {
        userName : username,
        password,
        email
    }

    const user = new User(userObject);
    await user.save();

    const token = jwt.sign({
        data: {
            email: email,
        },
    }, 'secretKey')
    return res.status(201).json({
        success : true,
        token
    })
}

const loginHandler = async (req, res) => {
    try{
        const {email, password} = req.body;
        const userDetails = await User.findOne({email}).lean();
        
        console.log(userDetails);
        if(!userDetails) 
            return res.status(403).json({
                success : false,
                message : 'Email not found'
            })
        
        if(password != userDetails.password)
        return res.status(404).json({
            success : false,
            message : 'Incorrect password'
        })
    
        const token = jwt.sign({
            data: {
                email: email,
            },
        }, 'secretKey')
    
        return res.status(200).json({
            token,
            email: email
        })
    }catch(err){
        console.log('err', err);
        return res.status(200).json({
            success : false,
            message : 'Something went wrong'
        })
    }
}

module.exports = {
    signUpHandler,
    loginHandler
}