const express = require('express')
const createError = require('http-errors')
const multer = require('multer')
const upload = multer()

const router = express.Router()

const firebase = require('../firebase')
//const firebaseAdmin = require('../firebaseAdmin')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { user: null /* TODO */ })
})

router.get('/auth', function (req, res, next) {
  res.render('auth')
})

router.post('/auth', function (req, res, next) {
  const { username, password } = req.body
  firebase.auth().signInWithEmailAndPassword(username, password)
  .then(function (userCredential) {

    // Traitement quand la fonction a réussi

    res.redirect('/')



  }).catch(function (error) {

    res.render('auth', { error: "Bad Credentials"})

  });
})

router.get('/logout', function (req, res, next) {
  // TODO
})

router.get('/gallery', function (req, res, next) {
  const images = []
  // TODO
  res.render('gallery', { images })
})

router.post('/gallery', upload.single('image'), function (req, res, next) {
  const file = req.file
  // TODO
})

router.get('/articles', async function (req, res, next) {
  const articles = []
  // TODO
  res.render('articles', { articles })
})

module.exports = router
