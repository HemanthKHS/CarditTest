var firebaseConfig = {
    apiKey: "AIzaSyCzrlCN_QpUHpSno5O1neGFzRMQiYz6TyE",
    authDomain: "card-it-87130.firebaseapp.com",
    projectId: "card-it-87130",
    storageBucket: "card-it-87130.appspot.com",
    messagingSenderId: "488021775472",
    appId: "1:488021775472:web:eb59dfda195d6f2bd050b5",
    measurementId: "G-K8688WC6YE"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage   = firebase.storage();
  const projectFirestore = firebase.firestore();