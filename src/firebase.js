import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBe2Ch9HyoIw9pBruSOZD79KG3jcUBQ6-U",
    authDomain: "clone-44487.firebaseapp.com",
    projectId: "clone-44487",
    storageBucket: "clone-44487.appspot.com",
    messagingSenderId: "286608018652",
    appId: "1:286608018652:web:fd2714e47f9e9ccd67f819",
    measurementId: "G-SJ1SZW4S21"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };