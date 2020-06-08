$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();
    let favArray = [];
    favArray.push($("input#fav-color").val());
    favArray.push($("input#fav-animal").val());
    favArray.push($("input#fav-food").val());
    favArray.push($("input#fav-month").val());
    favArray.push($("input#fav-movie").val());
    favArray.push($("input#fav-icecream").val());
    let newArray = [];
    newArray.push(favArray[1]);
    newArray.push(favArray[0]);
    newArray.push(favArray[2]);
    $("#results-list").append("<li>" + newArray[0] + "</li>");
    $("#results-list").append("<li>" + newArray[1] + "</li>");
    $("#results-list").append("<li>" + newArray[2] + "</li>");
  });
});