const { user } = require('../models')
const {decryptPwd} = require('../helpers/bcrypt')
const {tokenGenerator} = require('../helpers/jwt')
const { Op } = require('sequelize');

class UserController {
    static async list(req, res, next) {
        try {
            const userList = await user.findAll({
                order : [
                    ['id','DESC']
                ]
            })
            res.status(200).json(userList)
        } catch (err) {
            res.status(500).json({
                message: error
            })
        }
    }
    static addFormUser(req, res,next) {
        // res.send('menampilkan form add user')
        // res.render('userAdd.ejs');
    }
    static async editFormUser(req, res, next) {
        const id = req.params.id;
        try {
            const userId = await user.findOne({
                where : { id }
            })
            // res.status(500).json(userId)
            // res.render('userEdit.ejs', { user: userId })
        } catch (err) {
            res.status(500).json({
                message: error
            })
        }
    }
    static async editUser(req, res, next) {
        const id = req.params.id;
        const { full_name, username, email, password, roles } = req.body;
        const user_img = "https://aqueous-savannah-95860.herokuapp.com/"+req.file.path;
        try {
            const userEdit = await user.update({
                full_name, username, email, password, user_img, roles 
            }, {
                where: { id }
            })    
            const userUpdate = await user.findOne({
                where : {
                    id
                }
            })
            res.status(200).json({id:userUpdate.id,full_name:userUpdate.full_name,username:userUpdate.username,email:userUpdate.email,image:user_img})
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async deleteUser(req, res, next) {
        const id = req.params.id;
        try {
            const userDelete = await user.destroy({
                where: { id }
            })
            // res.send("Deleted")
            res.redirect('/users')
        } 
        catch (err) {            
            res.send(err)
        }
    }
    static async findById(req, res, next) {
        const id = req.params.id;
        try {
            const userId = await user.findOne({
                where: { id }
            })
            res.status(201).json(userId)
        }
        catch (err) {            
            res.send(err)
        }
    }
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const userFound = await user.findOne({
                where : {
                    email
                }
            })
            if(userFound){
                if(decryptPwd(password, userFound.password)){
                    const access_token = tokenGenerator(userFound)
                    res.status(200).json({access_token, email:email, full_name:userFound.full_name,username:userFound.username, userId:userFound.id, image:userFound.user_img})
                } else {
                    throw {
                        status : 400,
                        msg : "Pwd is not the same."
                    }    
                }
            }else{
                res.status(404).json({
                    msg : "User is not found."
                })
                throw {
                    status : 404,
                    msg : "User is not found."
                }
            }
        }catch(err){
            res.status(500).json(err)
        }
    }

    static async addUser(req, res, next) {
        const { username, email, password, roles} = req.body;
        const user_img = req.file.path;
        try {
            const userFound = await user.findOne({
                where: {
                    [Op.or]:[{username:username},{email:email}]
                }
            })
            if(userFound){            
                res.status(409).json({
                    msg: "Already exist."
                })
            } else {
                const userAdd = await user.create({
                    username, email, password, user_img, roles
                })
                // res.status(201).json(userReg)
                // res.redirect('/users')
            }               
        } catch (err) {
            res.status(201).json(err)
        }
    }
    static async register(req, res, next) {
        const { username, email, password } = req.body;
        try {

            const userFound = await user.findOne({
                where: {
                    [Op.or]:[{username:username},{email:email}]
                }
            })
            if(userFound){            
                res.status(409).json({
                    msg: "Already exist"
                })
            } else {
                const userReg = await user.create({
                    username, email, password
                })
                const print = await user.findOne({
                    where : {
                        email
                    }
                })
                const access_token = tokenGenerator(userReg)
                res.status(201).json({access_token, email, username, userId:print.id})
                // res.status(201).json(userReg)
            }               
        } catch (err) {
            res.status(201).json(err)
        }
    }
}

module.exports = UserController;

