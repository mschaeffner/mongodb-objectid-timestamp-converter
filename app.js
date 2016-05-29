$(document).ready(function() {

  var objectIdFromDate = function (date) {
  	return Math.floor(date.getTime() / 1000).toString(16) + "0000000000000000";
  };

  var dateFromObjectId = function (objectId) {
  	return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  };

  var withLeadingZero = function(value) {
    return (value <= 9) ? "0" + value : value;
  };

  $('#objectIdInput').on('input propertychange paste', function() {
    var date = dateFromObjectId($(this).val());

    $('#yearInput').val(date.getFullYear());
    $('#monthInput').val(withLeadingZero(date.getMonth() + 1));
    $('#dayInput').val(withLeadingZero(date.getDate()));
    $('#hoursInput').val(withLeadingZero(date.getHours()));
    $('#minutesInput').val(withLeadingZero(date.getMinutes()));
    $('#secondsInput').val(withLeadingZero(date.getSeconds()));

  });

  $('#dateAndTimeForm input').on('input propertychange paste', function() {

    var year = $('#yearInput').val();
    var month = $('#monthInput').val();
    var day = $('#dayInput').val();
    var hours = $('#hoursInput').val();
    var minutes = $('#minutesInput').val();
    var seconds = $('#secondsInput').val();

    var date = new Date(year, month-1, day, hours, minutes, seconds);
    var objectId = objectIdFromDate(date);

    $('#objectIdInput').val(objectId);

  });

});
