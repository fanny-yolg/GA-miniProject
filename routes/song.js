const { Router } = require('express');
const router = Router();
const SongController = require('../controllers/Song')

router.get('/', SongController.getSong);
router.post('/', SongController.addSong);
router.get('/:id', SongController.findByMovie)
router.delete('/:id', SongController.deleteSong);
router.put('/:id', SongController.editSong);

module.exports = router