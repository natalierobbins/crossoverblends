const express = require('express')
const router = express.Router()
const { RedirectSpotify, AuthSpotify } = require('../controllers/auth.js')

router.get('/spotify-redirect', RedirectSpotify)
router.get('/spotify-auth', AuthSpotify)

module.exports = router