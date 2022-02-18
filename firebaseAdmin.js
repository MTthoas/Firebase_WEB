const admin = require("firebase-admin");
const serviceAccount = require("./firebasekey.json");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "AIzaSyDQwUlPzi0i_9xsYXEiIqZ7On0UttUUm2Y",
  authDomain: "tp-cloud-bfe26.firebaseapp.com",
  databaseURL: "https://tp-cloud-bfe26-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tp-cloud-bfe26",
  storageBucket: "tp-cloud-bfe26.appspot.com"
};
admin.initializeApp(firebaseConfig);

module.exports = admin;
