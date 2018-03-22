//This code is to work on getting the PDF api to work without currently working on the JS that will be a part of the project.  This is to prevent any badness from happening to the necessary JS while I mess with this.
//The API info page: https://en.pdf24.org/javascript-pdf-api.html

var doc = new PDF24Doc({  //Needs to be PDF24Doc
    charset: "UTF-8",
    headline: "Trying out a pdf",
    filename: "trial1",
    pageSize: "210x297" //standard size paper
    //can add email stuff as well
});
var content = "this is a pdf.  Or at least it better be!"

$(document).ready(function () {
$("#pdfArea").append(content);
    function createPDF() {
        doc.create();
    };

    var copy = $("#pdfArea").text();
    console.log(copy);
    doc.addElement({
        title: "This is a title",
        author: "Chay",
        body: copy,
    })
    for(i=0; i<3; i++) {
    doc.addElement({
        title: $("#sec"+i).text(),
        body: $("#status"+i).text(),
    });
    console.log ($("#sec"+i).text());
}
   // console.log($("#status").text());
    $("#makePDF").click(createPDF);
});