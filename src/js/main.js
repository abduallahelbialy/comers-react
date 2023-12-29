//add class active and removed on navbar
import $ from 'jquery'
$(document).ready(function() {
  $('#bar').on('click', () => {
    $('#navbar').addClass('active');

  })
  $('#close').on('click', () => {
    $('#navbar').removeClass('active');
  })
})
///rateyo
$(document).ready(function () {
  var mainimg = $("#mainimg");
  var smallimg = $(".small-img");

  smallimg.eq(0).click(function () {
    mainimg.attr("src", smallimg.eq(0).attr("src"));
  });

  smallimg.eq(1).click(function () {
    mainimg.attr("src", smallimg.eq(1).attr("src"));
  });

  smallimg.eq(2).click(function () {
    mainimg.attr("src", smallimg.eq(2).attr("src"));
  });

  smallimg.eq(3).click(function () {
    mainimg.attr("src", smallimg.eq(3).attr("src"));
  });

  smallimg.eq(4).click(function () {
    mainimg.attr("src", smallimg.eq(4).attr("src"));
  });
});



