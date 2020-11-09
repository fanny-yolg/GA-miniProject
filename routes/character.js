const { Router } = require('express');
const router = Router();
const CharacterController = require('../controllers/Character')

router.get('/', CharacterController.getCharacter);
router.post('/', CharacterController.addCharacter);
router.delete('/:id', CharacterController.deleteCharacter)
router.get('/:id', CharacterController.getdByMovie);
router.put('/:id', CharacterController.editCharacter)

module.exports = router;