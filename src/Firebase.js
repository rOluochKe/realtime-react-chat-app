import firebase from 'firebase';

const config = {
  projectId: 'reactchat-1fe8e', 
  // apiKey: 'YOUR_API_KEY',
  databaseURL: 'https://reactchat-1fe8e-default-rtdb.europe-west1.firebasedatabase.app'
  };
firebase.initializeApp(config);

export default firebase;