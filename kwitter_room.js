user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome - "+ user_name + "!";
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

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >@ "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}