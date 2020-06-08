$(document).ready(function () {
  $("#form1").submit(function (event) {
    event.preventDefault();
    let favArray = [];
    favArray.push($("input#fav-color").val());
    favArray.push($("input#fav-food").val());
    favArray.push($("input#fav-month").val());
    favArray.push($("input#fav-movie").val());
    favArray.push($("input#fav-icecream").val());
  });
});