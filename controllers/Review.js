const { Review, Movie, user } = require('../models')

class ReviewController {
    static async getReview(req,res,next) {
        try {
            const reviews = await Review.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Movie,user
                ],
            })
            res.status(200).json(reviews)
        } catch(err){
            next(err)
        }
    }
    static async addReview(req,res,next){
        const userId = req.userData.id        //buat authorisasi
        const MovieId = req.params.MovieId
        const { user_rating,comment,date_of_comment,share } = req.body;
        try {
            const found = await Review.findOne({
                where : {
                    userId : userId,
                    MovieId : MovieId
                }
            })
            if(found){
                res.status(409).json({
                    msg: "Only 1 review for 1 movie per user"
                })
            } else {
                const review = await Review.create({
                    user_rating,comment,date_of_comment,share,MovieId,userId
                })
                res.status(201).json(review)
            }
        } catch(err) {
            next(err);
        }
    }    
    static async deleteReview(req, res, next) {
        const id = req.params.id;
        try {
            const hapus = await Review.destroy({
                where: { id }
            })
            res.status(200).json({
                msg:" Review deleted"
            })
        }
        catch(err) {
            next(err);
        }
    }
    static async editReview(req,res,next) {
        const id = req.params.id;
        const { user_rating,comment,date_of_comment,share } = req.body;
        try{
            const update = await Review.update({ user_rating,comment,date_of_comment,share },{ 
                where : {
                    id
                }
            })
        res.status(201).json({
            msg: "Review updated"
        })
        } catch(err){
            next(err);        
        }
    }
    static async findByMovie(req,res,next){
        const id = req.params.id;
        try{
            const review = await Review.findAll({
                where : {
                    share : "true", 
                    MovieId : id 
                },
                include : [
                    Movie,user
                ]
            })
            if (review){
                res.status(200).json(review)
            } else {
                res.send(404).json({
                    msg: "there is no review found in this movie"
                })
            }
        } catch(err){
            next(err);
        }
    }
    static async rating(req,res,next){
        const id = req.params.id
        try{
            const rating = await Review.findAll({
                where : { MovieId:id }
        })
        let temp = 0
        rating.forEach(el => {
        temp += el.user_rating
        });
        const rate = temp/rating.length
        res.status(200).json({
            average_rating : rate,
            total_reviewer : rating.length,
            Movie : Movie.title
        })
        } catch(err){
            next(err)
        }
    }
}
module.exports = ReviewController
