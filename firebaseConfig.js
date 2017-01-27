const firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyDe3_dpVcv56_fwDZndShyIcGTHaQHqOMU",
  authDomain: "dinossauros-f9582.firebaseapp.com",
  databaseURL: "https://dinossauros-f9582.firebaseio.com",
  storageBucket: "dinossauros-f9582.appspot.com",
  messagingSenderId: "225828116114"
 };

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
