import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDXO018NFb9NH4FEKTnNlPYhb0vkScWjWk',
  authDomain: 'catch-of-the-day-72c17.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-72c17-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebase.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
