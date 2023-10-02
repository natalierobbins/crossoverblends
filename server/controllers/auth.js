const querystring = require('querystring')
const request = require('request')
const { encodeFormData } = require('../helpers/encode')
const fetch = require('node-fetch')
const crypto = require('crypto')

const RedirectSpotify = async (req, res) => {
    let scope = 'user-top-read user-read-recently-played'
    let state = crypto.randomBytes(20).toString('hex')
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID_SPOTIFY,
            redirect_uri: process.env.REDIRECT_URI_SPOTIFY,
            scope: scope,
            show_dialog: true,
            state: state
        })
    )
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID_SPOTIFY}&response_type=code&redirect_uri=${process.env.REDIRECT_URI_SPOTIFY}&scope=${scope}&show_dialog=true`)
}

const AuthSpotify = async (req, res) => {

    // let body = {
    //     grant_type: 'authorization_code',
    //     code: req.query.code,
    //     redirect_uri: process.env.REDIRECT_URI_SPOTIFY,
    // }

    var code = req.query.code || null
 
    var authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          form: {
            code: code,
            redirect_uri: process.env.REDIRECT_URI_SPOTIFY,
            grant_type: 'authorization_code'
          },
          headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID_SPOTIFY + ':' + process.env.CLIENT_SECRET_SPOTIFY).toString('base64'))
          },
          json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(response)
            console.log('yippee!')
            res.redirect('http://localhost:3000/<3')
        }
        else {
            console.log(response)
            console.log('kms')
        }
    })
  
}

module.exports = { RedirectSpotify, AuthSpotify }