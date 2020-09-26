$(document).ready(function () {
  const dataObject = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      dataObject[$(this).data('id')] = $(this).data('name');
      $('div.amenities h4').text(Object.values(dataObject).join(', '));
    } else if ($(this).is(':not(:checked)')) {
      delete dataObject[$(this).data('id')];
      $('div.amenities h4').text(Object.values(dataObject).join(', '));
    }
  });

  $.ajax({url: "http://localhost:5001/api/v1/status/", success: function(result){
    if (result.status === "OK") {
      $('div#api_status').toggleClass('not-available');
      $('div#api_status').toggleClass('available');
    }
  }});
});
