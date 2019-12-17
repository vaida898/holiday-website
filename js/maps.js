function initMap() {

  var Paris = { lat: 48.856613, lng: 2.352222};
  var hotel = { lat: 48.873192, lng: 2.323939};
  var eiffelTower = { lat: 48.858372, lng: 2.294481};
  var arcDeTriomphe = { lat: 48.876911, lng: 2.293690};
  var louvre = { lat: 48.860611, lng: 2.337644};
  var restaurant = { lat: 48.871897, lng: 2.341563};

  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: Paris}, {zoom: 12, hotel}, {zoom: 12, eiffelTower},
      {zoom: 12, arcDeTriomphe}, {zoom: 12, louvre}, {zoom: 12, restaurant});

  var marker = new google.maps.Marker({position: Paris, map: map});
  var marker = new google.maps.Marker({position: hotel, map: map});
  var marker = new google.maps.Marker({position: eiffelTower, map: map});
  var marker = new google.maps.Marker({position: arcDeTriomphe, map: map});
  var marker = new google.maps.Marker({position: louvre, map: map});
  var marker = new google.maps.Marker({position: restaurant, map: map});
}