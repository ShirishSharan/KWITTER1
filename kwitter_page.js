var firebaseConfig = {
          apiKey: "AIzaSyBw5FvmHlaPH1o02qQdEKYMVkgHVzluFCI",
          authDomain: "kwitter-33a7d.firebaseapp.com",
          databaseURL: "https://kwitter-33a7d.firebaseio.com",
          projectId: "kwitter-33a7d",
          storageBucket: "kwitter-33a7d.appspot.com",
          messagingSenderId: "230879960972",
          appId: "1:230879960972:web:fe1fe423b5ed1c358480a9"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}

