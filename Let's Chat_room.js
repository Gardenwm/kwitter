var firebaseConfig = {
    
  apiKey: "AIzaSyAWkFFoavvX3hEVB2awFV5KBMQUeglHRPQ",

  authDomain: "let-s-chat-webapp-d35a2.firebaseapp.com",

  databaseURL: "https://let-s-chat-webapp-d35a2-default-rtdb.firebaseio.com",

  projectId: "let-s-chat-webapp-d35a2",

  storageBucket: "let-s-chat-webapp-d35a2.appspot.com",

  messagingSenderId: "1799686758",

  appId: "1:1799686758:web:ef303ea5858b39b15bfba7"

  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose: "To add room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location="Let's Chat_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_name' id = " + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
     document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="Let's Chat_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}