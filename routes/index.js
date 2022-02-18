const express = require('express')
const createError = require('http-errors')
const multer = require('multer')
const upload = multer()

const router = express.Router()

const firebase = require('../firebase')
const firebaseAdmin = require('../firebaseAdmin')

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
  firebase.auth().signOut()
  .then(function () {

    res.redirect('/auth');

  }).catch(function(error){

  })
})

router.get('/gallery', function (req, res, next) {
  const images = []
  const bucket = firebaseAdmin.storage().bucket()
  bucket.getFiles({prefix:'images'},function(err,files,next,metadata){
    files.forEach(async function(file){
      if(!file.name.endsWith('/')){

      const url = await file.getSignedUrl({
        action:'read',
        expires: new Date('2500-12-31')
      })
      console.log(url)
      images.push(url);
             
    }
    })
    res.render('gallery', { images })

    
  })

});

router.post('/gallery', upload.single('image'), function (req, res, next) {
  const file = req.file
  const bucket = firebaseAdmin.storage().bucket()
  const fileRef = bucket.file('images/${file.originalName}')
  const stream = fileRef.createWriteStream({
    metadata: {
      contentType : file.mimetype
    }
  })
  stream.on('error', function(error){
    res.render('gallery',{error:'Upload problem'})
  })
  stream.on('finish', function(){
    res.redirect('/gallery')
  })
  stream.end(file.buffer)


})

router.get('/articles', async function (req, res, next) {
  const articles = []
  const ref = firebaseAdmin.firestore().collection('articles')
  const snapshot = await ref.get();
  snapshot.forEach(function(document){
    const article = document.data();
    articles.push(article)
  });
  // TODO
  res.render('articles', { articles })
})

module.exports = router
