const { Character, Movie, Actor } = require('../models')

class CharacterController {
    static async getCharacter(req,res,next){
        try {
            const result = await Character.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Movie,Actor
                ]
            })
            res.status(200).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async addCharacter(req, res, next) {
        const { MovieId,ActorId } = req.body;
        try {
            const character = await Character.create({
                    MovieId,ActorId
            })
                res.status(201).json(character)
            }
        catch (err) {
            next(err);
        }
    }
    static async deleteCharacter(req,res,next) {
        const id = req.params.id;
        try {
            const hapus = await Character.destroy({
                where: { id }
            })
            res.redirect('/character')
        }
        catch(err) {
            next(err);
        }
    }
    static async editCharacter(req,res,next) {
        const id = req.params.id;
        const { MovieId,ActorId } = req.body;
        try{
            const update = await Character.update({ MovieId,ActorId },
                { where : { id }
        })
        res.redirect('/character')
        } 
        catch(err){
        next(err);  
        }
    }
    static async getdByMovie(req,res,next){
        const id = req.params.id;
        try{
            const character = await Character.findAll({
                where : { MovieId : id },
                include : [
                    Movie,Actor
                ]
            })
            if (character){
                res.status(200).json(character)
            } else {
                res.send(404).json({
                    msg: "there is no character found in this movie"
                })
            }
        } catch(err){
            next(err);
        }
    }
}
module.exports = CharacterController