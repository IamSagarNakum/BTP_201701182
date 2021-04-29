/* eslint-disable prettier/prettier */
// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    // eslint-disable-next-line prettier/prettier
    apiKey: 'AIzaSyATC1Yn1WE7-HejWBZl6ac9j-GGo2Qfnyk',
    authDomain: 'agrifirebase-da383.firebaseapp.com',
    projectId: 'agrifirebase-da383',
    storageBucket: 'agrifirebase-da383.appspot.com',
    messagingSenderId: '180711076677',
    appId: '1:180711076677:web:5259223d56492bd5cec42c',
    measurementId: 'G-X4C03Y4D94'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
