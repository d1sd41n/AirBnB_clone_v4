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
    console.log(dataObject)
  });
});
