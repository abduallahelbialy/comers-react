//add class active and removed on navbar
import $ from "jquery";
$(document).ready(function () {
  $("#bar").on("click", () => {
    $("#navbar").addClass("active");
  });
  $("#close").on("click", () => {
    $("#navbar").removeClass("active");
  });
});
///rateyo
$(function () {
  $(".rateYo").rateYo({
    numStars: 5,
    rating: 5,
    spacing: "10px",
    starWidth: "15px",
    multiColor: {
      startColor: "#FF0000", //RED
      endColor: "#00FF00", //GREEN
    },
  });
});
