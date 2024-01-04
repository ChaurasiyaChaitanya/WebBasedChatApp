






// function Login(){
//     var email=document.getElementById('email').value;
//     var password=document.getElementById('password').value;
//     firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
//     alert('Login successful.')
 
//      var id=firebase.auth().currentUser.uid;
//      window.location.replace("");
//      localStorage.setItem('id',id);
     
//     }).catch(function(error){
 
//      var errorCode=error.code;
//      var errorMsg=error.message;
 
//     });
//    }


// function Signup() {
//   var name=document.getElementById('name').value;
//   var email=document.getElementById('email').value;
//   var password=document.getElementById('password').value;
   
//   firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
//   //  alert('User Register successfully');
//    var id=firebase.auth().currentUser.uid;
//    firebase.database().ref('Users/'+id).set({
//     username:name,
//     email: email,
//    });
 
//   }).catch(function(error){
 
//    var errorcode=error.code;
//    var errormsg=error.message;
 
//   });
//    }


//    function Logout(){
//     firebase.auth().signOut();
//   }
  
// function signIn() {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
// }


// function onFirebaseStateChanged() {
//     firebase.auth().onAuthStateChanged(onStateChanged);
// }

//   var userId=localStorage.getItem('id');
//   firebase.database().ref('Users/'+userId).once('value').then(function(snapshot){
//   var fname=(snapshot.val() && snapshot.val().fatherName);
//   var cnic=(snapshot.val() && snapshot.val().CNIC);
//   var age=(snapshot.val() && snapshot.val().UserAge);

//   document.getElementById('fname').innerHTML=fname;
//   document.getElementById('age').innerHTML=age;
//   document.getElementById('cnic').innerHTML=cnic;
//  });
