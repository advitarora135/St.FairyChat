const firebaseConfig = {
      apiKey: "AIzaSyD6PVsjoATz-HkTgviTv_hVIGXIeabMC0c",
      authDomain: "kwitter-80410.firebaseapp.com",
      projectId: "kwitter-80410",
      storageBucket: "kwitter-80410.appspot.com",
      messagingSenderId: "958165000115",
      appId: "1:958165000115:web:05a56180f01af2fb6cf5c6"
    };
    
// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

function send(){
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
