var firebaseConfig = {
      apiKey: "AIzaSyAwsc_wJOa93AEbLkwwPpIi2yqsscT4o6I",
      authDomain: "kwitter-social-webapp.firebaseapp.com",
      databaseURL: "https://kwitter-social-webapp-default-rtdb.firebaseio.com",
      projectId: "kwitter-social-webapp",
      storageBucket: "kwitter-social-webapp.appspot.com",
      messagingSenderId: "120744971072",
      appId: "1:120744971072:web:0d0d4504ed540d9d6d48a5"
    };
    
    
    
      firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }