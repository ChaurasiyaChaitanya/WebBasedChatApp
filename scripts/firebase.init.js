// <!-- The core Firebase JS SDK is always required and must be listed first -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var auth=firebase.auth();
  var db = firebase.database().ref('users');
  var db = firebase.database().ref('friend_list');
  var db = firebase.database().ref('chatMessages');



  