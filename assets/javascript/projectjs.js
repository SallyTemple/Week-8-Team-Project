//the following javascript is to create a pdf of the home inspection

$(document).ready(function () {
  var quesNum = 11 //number of questions to create for loops
  var date;
  var homeInsp;
  var jobNum;
  var customer;
  var email;
  var address;
  var city;
  var state;
  var zipCode;
  var answer; 
  var notes;  


  
  //The following variable creates a blank pdf as well prepares the email
  var doc = new PDF24Doc({  //Needs to be PDF24Doc
    charset: "UTF-8",
    headline: "Home Inspection for " + address,
    filename: "homeinspection " + jobNum,
    pageSize: "210x297", //standard size paper
    emailTo: email,
    emailFrom: email, //This would be populated with a company email instead of the client's but we only want to make up one email address for security reasons
    emailSubject: "Home Inspection Results",
    emailBody: "Dear " + customer + ", thank you for choosing FAD-B Home Inspections.  You will find a PDF of your home inspection attach.  Have a FAB-ulous Day, " + homeInsp,
    emailBodyType: "text"
  });

  //this function will put all of the pdf components together to create the final product.  This function of a single line exists because js/API does not like .click(doc.create()) so this is a work around that issue
  function createPDF() {
    doc.create();
  };

  //this function will push the information to the blank pdf.  The first part is the general information.  The for loop goes through all of the questions, answers, and notes; adding each individual set of question, answer, note to the pdf one at a time.
  function pushInfo() {
    doc.addElement({
      title: "Customer Information",
      author: "Inspector: " + homeInsp,
      body: "Customer: " + customer + "     Address: " + address + ", " + city + ", " + state + " " + zipCode
    });
    console.log("Customer: " + customer + "     Address: " + address + ", " + city + ", " + state + " " + zipCode);

    for (i = 0; i < quesNum; i++) {
      for (j = 1; j < 4; j++) { //checking to see which of the 3 radio buttons is checked
        if ($("#q" + i + "B" + j).is(':checked')) {
          answer = $("#q" + i + "B" + j).attr("value");
        }
      }

      notes = $("#q" + i + "C").val().trim();
      var response = answer + ".  " + notes;
      console.log(i + ": " + response);

      doc.addElement({
        title: $("#q" + i + "A").text(),  //makes the question a subsection header
        body: response  //makes the checked answer and note the subsection content
      })
    }
  }

  //click function makes it so the variables used are assigned the values in their corresponding text boxes.  Then the pdf gets all of its information pushed to it and finally creates the pdf.
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