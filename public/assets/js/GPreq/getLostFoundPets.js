
$(document).ready(function () {

  var kittayIcon = L.icon({
    iconUrl: './assets/img/kittay.png', //"public/assets/img/kittay.png",

    iconSize: [25, 36], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 36], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-10, -35] // point from which the popup should open relative to the iconAnchor
  });
  var doggyIcon = L.icon({
    iconUrl: "./assets/img/dog.png",


    iconSize: [25, 36], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [25, 36], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-10, -35] // point from which the popup should open relative to the iconAnchor
  });
  key = "AIzaSyD70EcFlRlgIbc1ARNvns5CszqjaUyQzVI";
  // initialize the map
  var mymap = L.map('map').setView([30.2672, -97.7431], 13);

  // load a tile layer
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiamN0b2JleSIsImEiOiJjam9kNGs3MzMwczI2M3BwYjVtaXRpZ2l1In0.sxKzZ76nyy_PN8ETEnoKKA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamN0b2JleSIsImEiOiJjam9kNGs3MzMwczI2M3BwYjVtaXRpZ2l1In0.sxKzZ76nyy_PN8ETEnoKKA'
  }).addTo(mymap);
  var markers = new L.FeatureGroup();
  $.get("/api/pets",
    function (data) {

      for (var i = 0; i < data.length; i++) {
        if (data[i].found_location) {
          let mapPoint = data[i].found_location.split(',')
          let mapPointParsed = [parseFloat(mapPoint[0]), parseFloat(mapPoint[1])]
          if (data[i].type === "Dog") {
            marker = new L.marker((mapPointParsed), { icon: doggyIcon })
              .bindPopup("Animal_ID " + String(data[i].animal_ID))
              markers.addLayer(marker);
          }
          else if (data[i].type === "Cat") {
            marker = new L.marker((mapPointParsed), { icon: kittayIcon })
              .bindPopup("Animal_ID " + String(data[i].animal_ID))
              markers.addLayer(marker);
          }
        }
      }
    });
    mymap.addLayer(markers);
    function clearAllMarkers(){
      mymap.clearLayers(markers);
  }

  var table = new Tabulator("#tabulator-table", {
    height: "311px",
    layout: "fitColumns",
    placeholder: "No Data Set",
    columns: [
      { title: "Name", field: "name", sorter: "string", headerFilter: "input" },
      { title: "Found Location", field: "found_location", sorter: "string", width: 100 },
      { title: "At AAC?", field: "at_AAC", sorter: "string", headerFilter: "input" },
      { title: "Intake Date", field: "intake_date", sorter: "date", align: "center" },
      { title: "Looks Like", field: "looks_like", align: "center", formatter: "string", headerFilter: "input" },
      { title: "Type", field: "type", align: "center", formatter: "string", headerFilter: "input" },
      { title: "Color", field: "color", align: "center", formatter: "string", headerFilter: "input" },
      { title: "Sex", field: "sex", align: "center", formatter: "string", headerFilter: "input" },
      { title: "Age", field: "age", align: "center", formatter: "string", headerFilter: "input" }
    ],
    
    
    rowClick: function (e, row) {
      var rowClicked = row.getData();
      console.log(rowClicked.id)
      clearAllMarkers();
     }
   
  });
  table.setData("/api/pets");

  function onMapClick(e) {
    marker.openPopup();
  }
  mymap.on('click', onMapClick);
})


