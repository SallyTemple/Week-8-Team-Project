$(document).ready(function () {
var quesNum = 5 //number of questions to create for loops
var val = val().trim() //because typing this 20 times if for suckers
var date = $("#date").val;
var homeInsp = $("#homeInsp").val();
var jobNum = $("#jobNum").val;
var customer = $("#firstName").val + " " + $("#lastName").val;
var email = $("#email").val;
var address = $("#address").val + " " + $("#unitN").val;
var city = $("#city").val;
var state = $("#state").val;
var zipCode = $("#zipCode").val;

var config = {
    apiKey: "AIzaSyAwGC7mDNrcI3JXveoAJhic3vVrQHuCt1Q",
    authDomain: "inspectr-checkr.firebaseapp.com",
    databaseURL: "https://inspectr-checkr.firebaseio.com",
    projectId: "inspectr-checkr",
    storageBucket: "inspectr-checkr.appspot.com",
    messagingSenderId: "916021512160"
  };
  firebase.initializeApp(config)
var   database = firebase.database();

//The following is to create the pdf
var doc = new PDF24Doc({  //Needs to be PDF24Doc
  charset: "UTF-8",
  headline: "Home Inspection for " + address,
  filename: "homeinspection" + jobNum,
  pageSize: "210x297", //standard size paper
  emailTo: email,
  emailFrom: email, //This would be populated with a company email instead of the client's but we only want to make up one email address
  emailSubject: "Home Inspection Results",
  emailBody: "Dear" + customer + ", thank you for choosing FAD-B Home Inspections.  You will find a PDF of your home inspection attach.  Have a FAB-ulous Day, " + homeInsp,
  emailBodyType: "text"
});

function createPDF() {
  doc.create();
};

doc.addElement({
  title: "Customer Information",
  author: "Inspector: " + homeInsp,
  body: 
});

})