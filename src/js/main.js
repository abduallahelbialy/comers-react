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

  


