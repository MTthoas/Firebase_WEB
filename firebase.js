const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyDQwUlPzi0i_9xsYXEiIqZ7On0UttUUm2Y",
  authDomain: "tp-cloud-bfe26.firebaseapp.com",
  projectId: "tp-cloud-bfe26",
  // databaseURL: "TODO",
  // storageBucket: "TODO"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
