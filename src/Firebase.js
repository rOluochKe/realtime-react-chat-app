import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    projectId: 'reactchat-1fe8e', 
    // apiKey: 'YOUR_API_KEY',
    databaseURL: 'https://reactchat-1fe8e-default-rtdb.europe-west1.firebasedatabase.app'
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;