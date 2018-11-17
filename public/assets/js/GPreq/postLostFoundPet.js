$(document).ready(function () {
  

    //Generate Map
    var kittayIcon = L.icon({
        iconUrl: '../public/assets/img/kittay.png', //"public/assets/img/kittay.png",
    
        iconSize:     [25, 36], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [25, 36], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-10, -35] // point from which the popup should open relative to the iconAnchor
    });
    var doggyIcon = L.icon({
        iconUrl: "../public/assets/img/dog.png",
    
        iconSize:     [25, 36], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [25, 36], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-10, -35] // point from which the popup should open relative to the iconAnchor
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
        var Address=[]
        var clickedPoint=""
        
        function onMapClick(e) {
          
          if(Address.length>0){
          mymap.removeLayer(Address[0]);
          Address=[]}
          console.log(Address)
          lat = e.latlng.lat;
          lng = e.latlng.lng;
          clickedPoint = [lat, lng]
         
          clickedPointString = clickedPoint.toString();
          //AJAX request to convert lat/lng to address for tooltip
          const searchAddress = address => {
            let geocodeRequest = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickedPointString}&key=${key}`;
            $.get(geocodeRequest).then(response => {
              const clickedPointResponse = response.results[0].formatted_address;
               if($(".petType").val()==="dog"){
               clickedPointMarker = L.marker(clickedPoint, {icon:doggyIcon})}
               else if($(".petType").val()==="cat"){
              clickedPointMarker = L.marker(clickedPoint, {icon:kittayIcon})}
               
               clickedPointMarker.addTo(mymap).bindPopup(`You clicked on: <br> ${clickedPointResponse}`).openPopup();
              Address.push(clickedPointMarker);
              console.log(Address)
               
             })
          }
          searchAddress()
        }
        mymap.on('click', onMapClick);
       
        var foundPet = {
          name: $(".dog-name").val().trim(),
          found_location:clickedPoint,
          at_AAC:"No",
          intake_date:"11/17/2018",
          looks_like: $(".dog-type").val(),
          type: "Dog",
          color: $(".color").val(),
          sex: $(".sex").val(),
          age: $(".age").val(),
          image_link: $(".picture").val(),
      };
      $(".submit").on("click", function (event) {
        console.log(clickedPoint)
        $.post("/api/pets", foundPet,
        function(data) {
            console.log(data)
         
        
    })
  })
        
});
