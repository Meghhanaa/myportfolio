// /**
//  * Import function triggers from their respective submodules:
//  *
//  * const {onCall} = require("firebase-functions/v2/https");
//  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// // exports.helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

import firebase from 'firebase/app';
import 'firebase/functions';

const functions = firebase.functions();

const sendEmail = functions.https.onCall('sendEmail');

// Call the sendEmail function
sendEmail({
  email: 'meghanatamrakar0123@gmail.com',
  subject: 'Test email',
  message: 'This is a test email',
})
.then((result) => {
  if (result.data.success) {
    console.log('Email sent successfully');
  } else {
    console.error('Error sending email:', result.data.error);
  }
})
.catch((error) => {
  console.error('Error calling sendEmail function:', error);
});