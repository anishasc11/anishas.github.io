const firebaseConfig = {
    apiKey: "AIzaSyCNCCAIUe_5Gnb3jlEQwNLWeRxsUcm5HoY",
    authDomain: "myproject-f4e8d.firebaseapp.com",
    databaseURL: "https://myproject-f4e8d-default-rtdb.firebaseio.com",
    projectId: "myproject-f4e8d",
    storageBucket: "myproject-f4e8d.appspot.com",
    messagingSenderId: "442066215153",
    appId: "1:442066215153:web:7a92740ca1648baf210950",
    measurementId: "G-R1DW1D91MX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});