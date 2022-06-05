import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDXeMGqbMxXfzP3zEc6KCSoa1nFIA95x-w",
  authDomain: "react-sec02-183.firebaseapp.com",
  projectId: "react-sec02-183",
  storageBucket: "react-sec02-183.appspot.com",
  messagingSenderId: "1066781700302",
  appId: "1:1066781700302:web:85e3934100fac311a7209f",
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {
    //try???
    console.log("Message received. ", payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if (
        payload &&
        payload.notification &&
        payload.notification.click_action &&
        payload.notification.click_action.length > 0
      ) {
        window.open(payload.notification.click_action, "_blank");
      }
      this.close();
    };
  } catch (err) {
    console.log("Caught error: ", err);
  }
});

messaging.usePublicVapidKey(
  "BNRCKXEms6LtkYHfUWVmQdjK-r_qCx1ENrwEJF-FEp99bDy2_xA_Pn06Jh5It8tkxeTn2HqP0P3UOmKr1xDteuI
);

export { messaging };
