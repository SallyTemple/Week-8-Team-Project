var quesNum = 11;
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

var date;
var inspector;
var jobNum;
var name;
var email;
var address;
var unitN;
var city;
var state;
var zipCode;
var answer;
var question;
var notes;
var resultsJob = [];

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

//google maps function

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 33.4483771, lng: -112.0740373 }
  });
  var geocoder = new google.maps.Geocoder();

  //  document.getElementById('submit').addEventListener('click', function () {
  geocodeAddress(geocoder, map);
  //  });
}

function geocodeAddress(geocoder, resultsMap) {
  //  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address}, function (results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      console.log('Geocode was not successful for the following reason: ' + status);
    }
  });
};

$(document).ready(function () {
  $("#mapPage").hide()

  $("#newJob").on("click", function () {


    $(".startup").css({ 'display': 'none' });
    $("#basicInfo").show();
    $("#customerInfo").show();

  });

});

$("#saveInfo").on("click", function () {

  event.preventDefault();

  date = $("#date").val().trim();
  inspector = $("#homeInsp").val().trim();
  jobNum = $("#jobNum").val().trim();
  name = $("#firstName").val().trim() + " " + $("#lastName").val().trim();
  email = $("#email").val().trim();
  address = $("#address").val().trim();
  unitN = $("#unitN").val().trim();
  city = $("#city").val().trim();
  state = $("#state").val().trim();
  zipCode = $("#zipCode").val().trim();

  $("#basicInfo").hide();
  $("#customerInfo").hide();
  $("#map").show();
  $("#mapPage").show();
  //$("#homeIns").show();


  // create data base object

  var newJob = {
    date: date,
    jobNum: jobNum,
    inspector: inspector,
    name: name,
    email: email,
    address: address,
    unitN: unitN,
    city: city,
    state: state,
    zipCode: zipCode,
    // homeInfo: homeInfo

  };

  database.ref().child("Inspection: " + jobNum).push(newJob);
  initMap();

});

$("#arrived").click(function() {
  $("#mapPage").hide();
  $("#homeIns").show();
  $("#map").hide();
})

// $("#homeIns").text("Session No. " + jobNum);

$("#submit").click(function () {
  event.preventDefault();
  for (i = 0; i < quesNum; i++) {
    for (j = 1; j < 4; j++) { //checking to see which of the 3 radio buttons is checked
      if ($("#q" + i + "B" + j).is(':checked')) {
        answer = $("#q" + i + "B" + j).attr("value");
      }
    }
    question = $("#q" + i + "A").text();
    console.log(question);
    notes = $("#q" + i + "C").val().trim();

    resultsJob[i] = {
      quest: question,
      answer: answer,
      notes: notes
    }
  }
  database.ref().child("Inspection: " + jobNum).update(resultsJob);

});




  /*console.log(database.jobNum);

  var jobRef = database.key;

  $("#homeIns").text("Session No." + jobRef.val());

});


$("#page2").on("click",$("#submit"), function () {

  event.preventDefault();
for (i=0; i<quesNum; i++){

  var question= $("#q"+ i +"A").val();
  var status = $("#q" + i + "B : selected").text();
  var notes =  $("#q"+ i +"C").val().trim();

  var resultsJob = {
    question:question,
    status:status,
    notes:notes
  }

  var addInfo= database.child(jobNum);

  addInfo.update(resultsJob);

  console.log(database.child(jobNum));

}

});*/




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
