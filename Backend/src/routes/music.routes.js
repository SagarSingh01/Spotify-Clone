const express = require('express')
const musicController = require('../Controllers/music.controller')
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic)

router.post("/album", authMiddleware.authArtist, musicController.createAlbum)

router.get("/", authMiddleware.auth, musicController.getAllMusics)

module.exports = router