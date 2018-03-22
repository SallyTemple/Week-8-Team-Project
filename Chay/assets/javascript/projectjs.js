$(document).ready(function () {
  var quesNum = 11 //number of questions to create for loops
  //var val = val().trim() //because typing this 20 times if for suckers
  var date;
  var homeInsp;
  var jobNum;
  var customer;
  var email;
  var address;
  var city;
  var state;
  var zipCode;
  var answer; //this will save the checked answer to a variable
  var notes;  //this will save the notes to a variable


  /* var config = {
     apiKey: "AIzaSyAwGC7mDNrcI3JXveoAJhic3vVrQHuCt1Q",
     authDomain: "inspectr-checkr.firebaseapp.com",
     databaseURL: "https://inspectr-checkr.firebaseio.com",
     projectId: "inspectr-checkr",
     storageBucket: "inspectr-checkr.appspot.com",
     messagingSenderId: "916021512160"
   };
   firebase.initializeApp(config)
   var database = firebase.database();*/

  //The following is to create the pdf
  var doc = new PDF24Doc({  //Needs to be PDF24Doc
    charset: "UTF-8",
    headline: "Home Inspection for " + address,
    filename: "homeinspection" + jobNum,
    pageSize: "210x297", //standard size paper
    /*check these once everything else is working
    emailTo: email,
    emailFrom: email, //This would be populated with a company email instead of the client's but we only want to make up one email address
    emailSubject: "Home Inspection Results",
    emailBody: "Dear" + customer + ", thank you for choosing FAD-B Home Inspections.  You will find a PDF of your home inspection attach.  Have a FAB-ulous Day, " + homeInsp,
    emailBodyType: "text"
    */
  });

  function createPDF() {
    doc.create();
  };

  function pushInfo() {
    doc.addElement({
      title: "Customer Information",
      author: "Inspector: " + homeInsp,
      body: "Customer: " + customer + "     Address: " + address + ", " + city + ", " + state + " " + zipCode
    });
    console.log("Customer: " + customer + "     Address: " + address + ", " + city + ", " + state + " " + zipCode);

    for (i = 0; i < quesNum; i++) {
      for (j = 1; j < 4; j++) {
        if ($("#q" + i + "B" + j).is(':checked')) {
          answer = $("#q" + i + "B" + j).attr("value");
        }
      }

      notes = $("#q" + i + "C").val().trim();
      var response = answer + ".  " + notes;
      console.log(i + ": " + response);

      doc.addElement({
        title: $("#q" + i + "A").text(),
        body: response
      })
    }
  }

  $("#submit").click(function (event) {
    event.preventDefault();
    date = $("#date").val().trim();
    homeInsp = $("#homeInsp").val();
    jobNum = $("#jobNum").val().trim();
    customer = $("#firstName").val().trim() + " " + $("#lastName").val().trim();
    email = $("#email").val().trim();
    address = $("#address").val().trim() + " " + $("#unitN").val().trim();
    city = $("#city").val().trim();
    state = $("#state").val().trim();
    zipCode = $("#zipCode").val().trim();
    pushInfo();
    createPDF();
  });
})