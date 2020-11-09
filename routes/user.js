const { Router } = require('express');
const router = Router();
const UserController = require('../controllers/user')
const { authentication, isUser } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')

router.get('/', authentication, UserController.list)
router.get('/id/:id', authentication, UserController.list)
router.get('/delete/:id', authentication, isUser, UserController.deleteUser)
router.get('/detail/:id', authentication, isUser, UserController.findById)
router.get('/edit/:id', authentication, isUser, UserController.editFormUser)
router.get('/add', authentication, isUser,UserController.addFormUser)
router.post('/add', upload.single('user_img'), authentication, isUser, UserController.addUser)
router.put('/edit/:id', upload.single('user_img'), UserController.editUser)

module.exports = router;

