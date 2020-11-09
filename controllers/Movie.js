const { Movie,Song } = require('../models')
const { Op } = require('sequelize')

class MovieController {
    static async getMovie(req,res,next){  
        const page = req.params.page      
        try {                             
            const options = {
                page, 
                paginate: 12,
                order: [
                    ['id', 'ASC']
                ],
                attributes : {
                    exclude : ['date_data_in','release_date','director','budget','trailer_url','createdAt','updatedAt']
                } 
              }
            let { docs, pages, total } = await Movie.paginate(options)
            if (page > pages){
                res.status(404).json({
                    msg : "page not found"
                })
            } else {
               res.status(200).json({
                total_page : pages,
                movie: docs,
                })
            }
        } catch (err){
            next(err);
        }
    }
    static async addMovie(req,res,next){
        const { img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url } = req.body
        try{
            const found = await Movie.findOne({
                where : {
                    title
                }
            })
            if (found){
                res.status(409).json({
                    msg: "Movie already exist. Input another movie. Thanks"
                })
            } else {
                const movie = await Movie.create({
                    img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url
                })
                res.status(201).json(movie)
            }    
        } catch(err){
            next(err);
        }
    }
    static async findById(req,res,next) {
        const id = req.params.id;
        try {
            const found = await Movie.findOne({
                where: { 
                    id 
                }, 
                include: [
                    Song
                ]
            })
            res.status(200).json(found)
        }
        catch(err) {
            next(err);
        }
    }
    static async deleteMovie(req,res,next) {
        const id = req.params.id;
        try {
            const hapus = await Movie.destroy({
                where: { id }
            })
            res.redirect('/movie/1')
        }
        catch(err) {
            next(err);
        }
    }
    static async editMovie(req,res,next) {
        const id = req.params.id;
        const { img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url } = req.body;
        try{
            const update = await Movie.update({ 
                img_url_backdrop,img_url_poster,title,genre,date_data_in,release_date,synopsis,director,budget,trailer_url 
            },{ 
                where : { id }
        })
        res.redirect('/movie')
        } catch(err){
        next(err);
        }
    }
    static async findGenre(req,res,next){
        const genre = req.params.genre
        const page = req.params.page
        try {
            const options = {
                where : {
                    genre
                },
                page, 
                paginate: 12,
                order: [
                    ['id', 'ASC']
                ],
                attributes : {
                    exclude : ['date_data_in','release_date','director','budget','trailer_url','createdAt','updatedAt']
                } 
              }
            const { docs, pages, total } = await Movie.paginate(options)
            if (page > pages){
                res.status(404).json({
                    msg : "page not found"
                })
            } else {
                res.status(200).json({
                    total_page : pages,
                    movie: docs,
                })
            }
        }
        catch (err){
            next(err);
        }
    }
    static async getMovieByTitle(req,res,next){
        const page = req.params.page      
        const { search } = req.query
        try {
            const options = {
                where : {
                    title: {
                        [Op.iLike]: '%' + search + '%'
                    }
                },
                page, 
                paginate: 12,
                attributes : {
                    exclude : ['date_data_in','release_date','director','budget','trailer_url','createdAt','updatedAt']
                }
            }
            const { docs, pages, total } = await Movie.paginate(options)
            if (page > pages){
                res.status(404).json({
                    msg : "page not found"
                })
            } else {
                res.status(200).json({
                    total_page : pages,
                    movie: docs,
                })
            }
        }
        catch(err){            
            next(err);
        }
    }
}

module.exports =  MovieController
