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

/*

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
};*/

$("button").on("click",$("#saveInfo"), function () {

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

  $("#basicInfo").hide();
  $("#customerInfo").hide();
  $("#homeIns").show();

 var jobRef=ref.child$(jobNum);

 database.ref().push(jobRef);
  // create data base object

 
  var newJob ={
    date: date,
    inspector: inspector,
    name: name,
    email: email,
    address: address,
    unitN: unitN,
    city: city,
    state: state,
    zipCode: zipCode,
    homeInfo: homeInfo

  };
  var addInfo= jobRef.child(jobNum).val();

  addInfo.update(newJob);

  // push info in Firebase Object

 

 
  console.log(database);



});






$(document).ready(function () {
  

  $("#newJob").on("click", function () {


    $(".startup").css({'display':'none'});
    $("#basicInfo").show();
    $("#customerInfo").show();

  });

});


/*http://www.pngall.com/home-png/download/4409  Save for Phase 2 with Real State API


// function getRealStateInfo() {

ajax, bring info, response, write in to HTML


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
