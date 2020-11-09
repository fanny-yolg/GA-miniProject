const { Router } = require('express');
const router = Router();
const MovieController = require('../controllers/Movie');

router.get('/find/:page', MovieController.getMovieByTitle)
router.get('/genre/:genre/:page', MovieController.findGenre)
router.get('/id/:id', MovieController.findById);
router.post('/', MovieController.addMovie);
router.put('/:id', MovieController.editMovie);
router.delete('/:id', MovieController.deleteMovie);
router.get('/:page', MovieController.getMovie);

module.exports = router;
