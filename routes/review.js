const { Router } = require('express');
const router = Router();
const ReviewController = require('../controllers/Review');
const { authentication, authorization } = require('../middlewares/auth');

router.get('/', ReviewController.getReview);
router.get('/rating/:id', ReviewController.rating)
router.post('/:MovieId', authentication, ReviewController.addReview);
router.put('/:id', authentication, authorization, ReviewController.editReview);
router.delete('/:id', authentication, authorization, ReviewController.deleteReview);
router.get('/:id', ReviewController.findByMovie);

module.exports = router