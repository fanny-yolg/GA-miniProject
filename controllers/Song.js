const { Song, Movie } = require('../models')

class SongController {
    static async getSong(req, res,next) {
        try {
            const result = await Song.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Movie
                ]
            })
            res.status(200).json(result);
        }
        catch (err) {
            next(err);
        }
    }
    static async findByMovie(req,res,next){
        const id = req.params.id;
        try{
            const song = await Song.findAll({
                where : { MovieId : id },
                include : [
                    Movie
                ]
            })
            if (song){
                res.status(200).json(song)
            } else {
                res.send(404).json({
                    msg: "there is no feauture song found yet in this movie"
                })
            }
        } catch(err){
            next(err);
        }
    }
    static async addSong(req,res,next) {
        const { featured_song, artist, MovieId } = req.body;
        try{
            const song = await Song.create({
                featured_song,artist,MovieId
            })
            res.status(201).json(song)
        }
        catch(err){
            next(err);
        }
    }
    static async deleteSong(req, res,next) {
        const id = req.params.id;
        try {
            const hapus = await Song.destroy({
                where: { id }
            })
            res.redirect('/song')
        }
        catch(err) {
            next(err);
        }
    }
    static async editSong(req,res,next) {
        const id = req.params.id;
        const { featured_song, artist, MovieId } = req.body;
        try{
            const update = await Song.update({ featured_song, artist, MovieId },
                { where : { id }
        })
        res.redirect('/song')
    } catch(err){
        next(err);
    }
    }
}
module.exports = SongController