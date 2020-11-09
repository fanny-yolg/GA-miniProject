const { Actor } = require('../models')

class ActorController {
    static async getActor(req,res, next) {
        try {
            const result = await Actor.findAll({
                order: [
                    ['id', 'ASC']
                ],
            })
            res.status(200).json(result);
        }
        catch (err) {
            // res.status(500).json(err);
            next(err);
        }
    }
    static async addActor(req,res,next){
        const { img_url,name} = req.body
        try {
            const found = await Actor.findOne({
                where: {
                    name
                }
            })
            if (found) {
                res.status(409).json({
                    msg: "Name already exist! Input another name. Thanks"
                })
            } else {
                const actor = await Actor.create({
                    img_url,name
                })
                res.status(201).json(actor)
            }
        } catch (err) {
            // res.status(500).json(err)
            next(err);
        }
    }
    static async findById(req, res,next) {
        const id = req.params.id;
        try {
            const found = await Actor.findOne({
                where: { id }
            })
            res.status(200).json(found)
        }
        catch(err) {
            // res.status(500).json(err);
            next(err);
        }
    }
    static async deleteActor(req, res, next) {
        const id = req.params.id;
        try {
            const hapus = await Actor.destroy({
                where: { id }
            })
            res.redirect('/actor')
        }
        catch(err) {
            // res.status(500).json(err);
            next(err);
        }
    }
    static async editActor(req,res,next) {
        const id = req.params.id;
        const { img_url,name } = req.body;
        try{
            const update = await Actor.update({ img_url,name },
                { where : { id }
        })
        res.redirect('/actor')
        } catch(err) {
        // res.status(500).json(err);  
        next(err);
        }
    }
}

module.exports = ActorController