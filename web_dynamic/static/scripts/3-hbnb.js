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

  $.ajax({
    url: 'http://localhost:5001/api/v1/places_search/',
    type: 'POST',
    data: JSON.stringify({}),
    contentType:"application/json; charset=utf-8",
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        let html_code1 = "<div class='title_box'><h2>" + data[i].name +"</h2> <div class='price_by_night'>" + data[i].price_by_night +"</div></div>";
        cond_guests = data[i].max_guest !== 1 ? 's' : '';
        let html_code2 = html_code1 + "<div class='information'><div class='max_guest'>" + data[i].max_guest + " Guest" + cond_guests + "</div>";
        cond_bedrooms = data[i].number_rooms !== 1 ? 's' : '';
        html_code2 += "<div class='number_rooms'>" + data[i].number_rooms + " Bedroom"+ cond_bedrooms +"</div>";
        cond_bathrooms = data[i].number_bathrooms !== 1 ? 's' : '';
        html_code2 += "<div class='number_bathrooms'>" + data[i].number_bathrooms + " Bathroom"+ cond_bathrooms +"</div></div>";
        let htmlCode3 = html_code2 + "<div class='description'>" + data[i].description + "</div>"
        $('SECTION.places').append('<article>' + htmlCode3 + '</article>');
        html_code1 = '';
        html_code2 = '';
      }
    }});
});
