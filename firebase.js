import firebase from 'firebase';
const firebaseConfig = {

    apiKey: "AIzaSyBwwxKzydcJeYmihXo1H5yQiOlJ2E2zXnQ",
  
    authDomain: "new-177e5.firebaseapp.com",
  
    projectId: "new-177e5",
  
    storageBucket: "new-177e5.appspot.com",
  
    messagingSenderId: "260632971392",
  
    appId: "1:260632971392:web:5cbd5c0550f1082d723e65"
  
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();

  export default db;