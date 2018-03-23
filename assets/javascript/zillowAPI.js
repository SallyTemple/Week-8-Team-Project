$(document).ready(function () {
    $("#submit").click(function(event){
    event.preventDefault();
    var baseURL = "http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=X1-ZWz18pev3p5j4b_2599m&address=";
    var address = $("#address").val().trim();
    var cityState = "&citystatezip" + $("#city").val().trim() + "%20C+" + $("#state").val().trim();
    var queryURL = baseURL + address + cityState
    console.log(queryURL);
});
})
