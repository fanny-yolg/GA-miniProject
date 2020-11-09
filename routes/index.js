const { Router } = require('express');
const router = Router();
const MovieRoutes = require('./movie')
const SongRoutes = require('./song')
const ActorRoutes = require('./actor')
const CharacterRoutes = require('./character')
const ReviewRoutes = require('./review')
const userRoutes = require('./user')
const UserController = require('../controllers/user')


router.get('/', (req,res)=>{
    res.status(200).json({
        msg: "this is home page"})
});

router.use('/movie', MovieRoutes)
router.use('/song', SongRoutes)
router.use('/actor', ActorRoutes)
router.use('/character', CharacterRoutes)
router.use('/review', ReviewRoutes)
router.use('/users', userRoutes)
router.post('/login', UserController.login)
router.post('/register', UserController.register)

module.exports = router;