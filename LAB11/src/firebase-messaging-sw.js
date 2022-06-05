importScripts("https://www.gstatic.com/firebasejs/7.14.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDXeMGqbMxXfzP3zEc6KCSoa1nFIA95x-w",
  authDomain: "react-sec02-183.firebaseapp.com",
  projectId: "react-sec02-183",
  storageBucket: "react-sec02-183.appspot.com",
  messagingSenderId: "1066781700302",
  appId: "1:1066781700302:web:85e3934100fac311a7209f",
});

firebase.messaging();
