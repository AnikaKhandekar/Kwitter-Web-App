
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
      apiKey: "AIzaSyCMLgIkpGPvSZpOu1pPXZI-jnoDlgbwXag",
      authDomain: "kwitter-web-app-3aae9.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-3aae9-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-3aae9",
      storageBucket: "kwitter-web-app-3aae9.appspot.com",
      messagingSenderId: "922971856001",
      appId: "1:922971856001:web:509f524c9ba1dff2e6c180"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+Room_names);
//row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";//
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
     
}
