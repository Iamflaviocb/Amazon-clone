import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYg3SGpfapbWjFp4faqds6GV9L9OJ55FQ",
  authDomain: "clone-734cb.firebaseapp.com",
  databaseURL: "https://clone-734cb.firebaseio.com",
  projectId: "clone-734cb",
  storageBucket: "clone-734cb.appspot.com",
  messagingSenderId: "718715236402",
  appId: "1:718715236402:web:b45383d643648fdd3d0c2b",
  measurementId: "G-4G9R71NX6W",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
