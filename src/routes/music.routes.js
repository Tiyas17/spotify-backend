const express=require('express'); 
const router=express.Router(); 
const musicController=require('../controllers/music.controller');
const multer=require('multer');
const {authMiddleware}=require('../middlewares/auth.middleware');
const {authenticate}=require('../middlewares/auth.middleware');

const upload=multer({
    storage:multer.memoryStorage()
});

router.post('/upload',authMiddleware,upload.single("music"),musicController.createMusic);
router.post('/album',authMiddleware,musicController.createAlbum);
router.get('/',authenticate,musicController.getAllMusics);
router.get('/albums',authenticate,musicController.getAllAlbums);
router.get('/albums/:id',authenticate,musicController.getAlbumById);
module.exports=router;