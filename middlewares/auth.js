const { User, Review} = require('../models')
const {tokenVerifier} = require('../helpers/jwt')

const authentication = (req, res, next) => {
        const { access_token } = req.headers;
        if(!access_token){
            res.status(404).json({
                msg : "Token not found"
            })
        }else {
            try {
                const decode = tokenVerifier(access_token)
                req.userData = decode
                next();
            }catch (err) {
                res.status(500).json(err)
            }
        }
    }    
const authorization = (req,res,next) => {
        console.log("Authorization works!");
        const id = req.params.id;
        const userId = req.userData.id

        Review.findOne({
            where : {
                id
            }
        }).then(review => {
            if(review){
                if(review.userId === userId){
                    next();
                } else {
                    throw {
                        status: 403,
                        msg: "User doesn't have any access"
                    }
                }
            } else {
               throw {
                    msg: "Review not found"
                }
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }
    
    const isUser = (req,res,next) => {
        console.log("Authorization user works!");
        const id = req.params.id;
        const userId = req.userData.id
        
        user.findOne({
            where : {
                id
            }
        }).then(user => {
            if(user){
                if(user.id === userId){
                    next();
                } else {
                    throw {
                        status: 403,
                        msg: "User doesn't have any access"
                    }
                }
            } else {
               throw {
                    msg: "User not found"
                }
            }
        }).catch(err=>{
            res.status(500).json(err)
        })
    }    

module.exports = {
    authentication,authorization,isUser
}
