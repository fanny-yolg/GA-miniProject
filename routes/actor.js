const { Router } = require('express');
const router = Router();
const ActorController = require('../controllers/Actor')

router.get('/', ActorController.getActor);
router.get('/:id', ActorController.findById)
router.post('/', ActorController.addActor);
router.delete('/:id', ActorController.deleteActor)
router.put('/:id', ActorController.editActor)

module.exports = router;
