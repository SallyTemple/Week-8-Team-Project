var config = {
    apiKey: "AIzaSyAwGC7mDNrcI3JXveoAJhic3vVrQHuCt1Q",
    authDomain: "inspectr-checkr.firebaseapp.com",
    databaseURL: "https://inspectr-checkr.firebaseio.com",
    projectId: "inspectr-checkr",
    storageBucket: "inspectr-checkr.appspot.com",
    messagingSenderId: "916021512160"
  };
  firebase.initializeApp(config);

  $("#saveInfo").on("click", function(){

    var date = $("#date").val().trim();
    var inspector = $("homeInsp").val().trim();
    var jobNum = $("jobNum").val().trim();
    var name = $("firstName").val().trim() + " " + $("lastName").val().trim();
    var email = $("email").val().trim();
    var address = $("address").val().trim();
    var unitN = $("unitN").val().trim();
    var city = $("city").val().trim();
    var state = $("state").val().trim();
    var zipCode =$("state").val().trim();

    getRealStateInfo();

    // write info in to Section 3, 
    // pull value in to Temp Variables
   

    var type = $("#type");
    var year = $("#year");
    var sqFt = $("sqFt");
    var bdr = $("#bdr");
    var bath = $("#nBath");
    var garage = $("#parking");
    var lot = $("#lot");
    var ac = $("#cooling");
    var heat = $("#heat");
    var roof = $("#roofing");
    var flooring = $("#flooring");
    var pool = $("#sPool");

     // push info in Firebase Object

     // grab uID
  });