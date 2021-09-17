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
  room_name= localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      
        message:msg,
        name:user_name,
        like:0
      });
    document.getElementById("msg").value="";

  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey; 
    message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name1=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    nametag="<h4>"+name1+"<img class='user_tick'src='tick.png'></h4>";
    messagetag="<h4 class='messageh4'>"+message+"</h4>";
   
    likebutton ="<button class='btn btn-warning' id="+firebase_message_id+" value ="+like+" onclick='updateLike(this.id)'>";
    spantag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
    console.log(like);
    row=nametag+messagetag+likebutton+spantag;
    document.getElementById("output").innerHTML+=row;
  }});
});
  }
getData();
function updateLike(message_id){
  console.log("Click on like button"+message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes


  })
};
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }