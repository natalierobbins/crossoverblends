const querystring = require('querystring')
const { encodeFormData } = require('../helpers/encode')
const fetch = require('node-fetch')

const RedirectSpotify = async (req, res) => {
    let scope = 'user-top-read user-read-recently-played'
    res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID_SPOTIFY}&response_type=code&redirect_uri=${process.env.REDIRECT_URI_SPOTIFY}&scope=${scope}&show_dialog=true`)
}

const AuthSpotify = async (req, res) => {
    console.log(req.query.code)
    let body = {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: process.env.REDIRECT_URI_SPOTIFY,
        client_id: process.env.CLIENT_ID_SPOTIFY,
        client_secret: process.env.CLIENT_SECRET_SPOTIFY
    }

    await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: encodeFormData(body)
    })
    .then(resp => {
        // console.log(resp)
        resp.json()
    })
    .then(data => {
        let query = querystring.stringify(data)
        res.redirect(`https://localhost:3000/${query}`)
    })
}

module.exports = { RedirectSpotify, AuthSpotify }