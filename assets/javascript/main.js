var config = {
    apiKey: "AIzaSyAwGC7mDNrcI3JXveoAJhic3vVrQHuCt1Q",
    authDomain: "inspectr-checkr.firebaseapp.com",
    databaseURL: "https://inspectr-checkr.firebaseio.com",
    projectId: "inspectr-checkr",
    storageBucket: "inspectr-checkr.appspot.com",
    messagingSenderId: "916021512160"
  };
  firebase.initializeApp(config);

  $("#submit").on("click", function(){

    var date = $("#date").val().trim();
    var inspector = $("homeInsp").val().trim();
    var jobNum = $("jobNum").val().trim();
    var name = $("firstName").val().trim() + " " + $("lastName").val().trim();
    var email = $("email").val().trim();
    var address = $("address").val().trim();
    var unitN = $("unitN").val().trim();
    var city = $("city").val().trim()
    var state = $("state").val().trim()




  });