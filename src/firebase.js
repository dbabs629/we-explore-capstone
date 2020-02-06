import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyA9Uos2N592b4lZZPnj7ONTCpH6zBcUtNg",
    authDomain: "we-explore-capstone.firebaseapp.com",
    databaseURL: "https://we-explore-capstone.firebaseio.com",
    projectId: "we-explore-capstone",
    storageBucket: "we-explore-capstone.appspot.com",
    messagingSenderId: "600499606674",
    appId: "1:600499606674:web:e0ebf54bc7c401118d024b"
  };

  firebase.initializeApp(config);

  export default firebase;