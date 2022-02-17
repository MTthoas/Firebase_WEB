const firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
  apiKey: "TODO",
  authDomain: "TODO",
  databaseURL: "TODO",
  projectId: "TODO",
  storageBucket: "TODO"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
