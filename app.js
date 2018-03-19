alert("Connected!");
// Initialize Firebase
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

var propName = "";
var propAddress = "";
var inspectDate = "";

function sendtoDB() {
	propName = $("#prop-name").val().trim();
	propAddress = $("#prop-address").val().trim();
	inspectDate = $("#inspect-date").val().trim();

	database.ref().push({
		propName:propName,
		propAddress:propAddress,
		inspectDate:inspectDate
	});
};
console.log("So far so good");

var propName = "";
	
var queryURL = "http://www.zillow.com/webservice/GetDeepSearchResults.htm";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
		console.log("Here");
	});

database.ref().on("child_added", function(snapshot) {
	console.log(snapshot.val());
	var times = snapshot.val().firstTrainTime;
	var newRow = $('<tr>');
	newRow.addClass("row" + e);
	$('.train-div').append(newRow);
	newRow.append("<td class='train-name'>" + snapshot.val().trainName + "</td>");
	newRow.append("<td class='destination'>" + snapshot.val().destination + "</td>");
	newRow.append('<td class="first-train">' + times + "</td>");
	var lastRow = $('<td class="last">');
	newRow.append(lastRow);
	newRow.append('<button class="row' + e + '">Delete</button>');
	e++;

	function liveTime() {
		var momentTime = moment(times, "HH:mm").diff(moment(), "seconds");
		var date = new Date(null);
		date.setSeconds(momentTime); 
		newTime = date.toISOString().substr(11, 8);
		lastRow.html(newTime);
	}
	liveTime();
	setInterval(liveTime, 1000);

	for (var i = 0; i < e; i++) {
		var buttonCycle = $('.row' + i + ' button');
		var buttonClass = buttonCycle.attr("class");
	}

	$(buttonCycle).click(function() {
		$('tr.' + buttonClass).remove();
	});
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});
