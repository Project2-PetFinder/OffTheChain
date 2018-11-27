
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

  $.get("/api/pets",
    function (data) {

      for (var i = 0; i < data.length; i++) {
        if (data[i].found_location) {
          let mapPoint = data[i].found_location.split(',')
          let mapPointParsed = [parseFloat(mapPoint[0]), parseFloat(mapPoint[1])]
          if (data[i].type === "Dog") {
            marker = new L.marker((mapPointParsed), { icon: doggyIcon })
              .bindPopup("Animal_ID " + String(data[i].animal_ID))
              .addTo(mymap);
          }
          else if (data[i].type === "Cat") {
            marker = new L.marker((mapPointParsed), { icon: kittayIcon })
              .bindPopup("Animal_ID " + String(data[i].animal_ID))
              .addTo(mymap);
          }
        }
        var name = "Not Listed"
        if (data[i].name) { name = data[i].name }
        $(".petList").append(`<tr>
        <td class="animal-id">${data[i].animal_ID}</td>
        <td class="name">${data[i].name}</td>
        <td class="found-location">${data[i].found_location}</td>
        <td class="at-aac">${data[i].at_AAC}</td>
        <td class="intake-date">${data[i].intake_date}</td>
        <td class="looks-like">${data[i].looks_like}</td>
        <td class="type">${data[i].type}</td>
        <td class="color">${data[i].color}</td>
        <td class="sex">${data[i].sex}</td>
        <td class="age">${data[i].age}</td>
        </tr>`)
        


      }
    });
    var table = new Tabulator("#example-table", {
      height:"311px",
      layout:"fitColumns",
      placeholder:"No Data Set",
      columns:[
          {title:"ID", field:"id", sorter:"number", width:200},
          {title:"Animal_ID", field:"animal_ID", sorter:"number"},
          {title:"Name", field:"name", sorter:"string"},
          {title:"Found Location", field:"found_location", sorter:"string",  width:100},
          {title:"At AAC?", field:"at_AAC", sorter:"string"},
          {title:"Intake Date", field:"intake_date", sorter:"date", align:"center"},
          {title:"Looks Like", field:"looks_like", align:"center", formatter:"string"},
          {title:"Type", field:"type", align:"center", formatter:"string"},
          {title:"Color", field:"color", align:"center", formatter:"string"},
          {title:"Sex", field:"sex", align:"center", formatter:"string"},
          {title:"Age", field:"age", align:"center", formatter:"string"}
      ],
  });
  
  //trigger AJAX load on "Load Data via AJAX" button click
  $(".continue").click(function(){
      table.setData("/api/pets");
  });

  function onMapClick(e) {

    marker.openPopup();

  }

  mymap.on('click', onMapClick);

  

})


