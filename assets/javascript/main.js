var config = {
  apiKey: "AIzaSyAwGC7mDNrcI3JXveoAJhic3vVrQHuCt1Q",
  authDomain: "inspectr-checkr.firebaseapp.com",
  databaseURL: "https://inspectr-checkr.firebaseio.com",
  projectId: "inspectr-checkr",
  storageBucket: "inspectr-checkr.appspot.com",
  messagingSenderId: "916021512160"
};

firebase.initializeApp(config);

var database = firebase.database();



var homeInfo = {
  type: "",
  year: " ",
  sqFt: " ",
  bdr: " ",
  bath: " ",
  garage: " ",
  lot: " ",
  ac: " ",
  heat: " ",
  roof: " ",
  flooring: " ",
  pool: " ",
};

$("#saveInfo").on("click", function () {

  event.preventDefault();

  var date = $("#date").val().trim();
  var inspector = $("#homeInsp").val().trim();
  var jobNum = $("#jobNum").val().trim();
  var name = $("#firstName").val().trim() + " " + $("#lastName").val().trim();
  var email = $("#email").val().trim();
  var address = $("#address").val().trim();
  var unitN = $("#unitN").val().trim();
  var city = $("#city").val().trim();
  var state = $("#state").val().trim();
  var zipCode = $("#zipCode").val().trim();

  // getRealStateInfo(); // write info in to Section 3, // pull value in to home array

  // create data base object
  var newJob = {
    date: date,
    inspector: inspector,
    jobNum: jobNum,
    name: name,
    email: email,
    address: address,
    unitN: unitN,
    city: city,
    state: state,
    zipCode: zipCode,
    homeInfo: homeInfo

  };


  // push info in Firebase Object

  database.ref().push(newJob);

  //var myUserId = firebase.auth().currentUser.uid;
  console.log(database);
  //console.log(myUserId);


});


//http://www.pngall.com/home-png/download/4409


// function getRealStateInfo() {

  /*ajax, bring info, response, write in to HTML


  $("#type").text(homeInfo.type);
  $("#year").text(homeInfo.year);
  $("sqFt").text(homeInfo.sqFt);
  $("#bdr").text(homeInfo.bdr);
  $("#nBath").text(homeInfo.bath);
  $("#parking").text(homeInfo.garage);
  $("#lot").text(homeInfo.lot);
  $("#cooling").text(homeInfo.ac);
  $("#heat").text(homeInfo.heat);
  $("#roofing").text(homeInfo.roof);
  $("#flooring").text(homeInfo.flooring);
  $("#sPool").text(homeInfo.pool);
}*/