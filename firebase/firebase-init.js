

  var con = firebase.database().ref('users');

  document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    var userInfo = con.push();
    userInfo.set({
      name: getId("name"),
      email:getId("email")
    });
    alert("sent");
    console.log("sent");
    document.getElementById("form").reset();
  });

  function getId(id){
    return document.getElementById(id).value;
  }
 
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in
  //     var user = firebase.auth().currentUser;
  
  //     if(user != null){
  
  //       var name = user.name;
  //       alert("Welcome to ChatApp" + name);
  
  //     }
  
  //   } else {
  //     // No user is signed in.
  //   }
  // });

  

  // function Login(){

  //   var email = document.getElementById("email").value;
  //   var password = document.getElementById("password").value;
  
  //   firebase.auth().signInWithEmailAndPassword(email.value, password.value);
  //   promise.catch(e => alert(e.message));

  //   alert("Signed In Successful.");
  //   window.location.replace("");

  // }
     


  // function SignUp() {

  //   var name = document.getElementById("name");

  //   var email = document.getElementById("email");
  //   var password = document.getElementById("password");

  //   const promise = auth.createUserWithEmailAndPassword(email.Value, password.value);
  //   promise.catch(e=> alert(e.message));

  //   alert("Signed up successful.")
  //   var id=firebase.auth().currentUser.uid;
  //   firebase.database().ref('Users/'+id).set({
  //     username:name,
  //     email: email,
  //   });

  //   window.location.replace("");
  // }


 
  
  


 
   





  