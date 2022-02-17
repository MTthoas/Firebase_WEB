const admin = require("firebase-admin");
const serviceAccount = require("TODO");

const firebaseConfig = {
  credential: admin.credential.cert(serviceAccount),
  apiKey: "TODO",
  authDomain: "TODO",
  databaseURL: "TODO",
  projectId: "TODO",
  storageBucket: "TODO"
};
admin.initializeApp(firebaseConfig);

module.exports = admin;
