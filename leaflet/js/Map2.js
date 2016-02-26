function resetD3(){
  $(".leaflet-zoom-hide").empty();
};

// STYLE VARIABLES

var altOutlineStyle = {
  weight: 3,
  color: "#f0ddc2",
  fillColor: "#f0ddc2",
  opacity: 0.8,
  fillOpacity: 0.0
};

var highlightStyle = {
  weight: 4,
  color: "#f0ddc2",
  fillColor: "#f0ddc2",
  opacity: 1,
  fillOpacity: 0.7
};

$('#Seykou').click(function(){
  resetD3();
  seykouPath();
});

$('#Mudiaga').click(function(){
  resetD3();
  mudiagaPath();
});

$('#Lamin').click(function(){
  resetD3();
  laminPath();
});

function tanFill(feature, layer) {
  layer.setStyle({
    weight: 3,
    color: "#f0ddc2",
    fillColor: "#f0ddc2",
    opacity: 1,
    fillOpacity: 0.5
  });

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // }
};

// FUNCTIONS FOR INTERACTIVE COUNTRIES

function onMali(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onSenegal(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onIvoryCoast(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};function onNigeria(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onEthiopia(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onSomalia(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onEritrea(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onLibya(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onSyria(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onGambia(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });


};
function onItaly(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(outlineStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

};


// FUNCTIONS FOR INFOBOX CONTROLS

// var info = L.control();
//
// info.onAdd = function (map){
//   this._div = L.DomUtil.create('div', 'info');
//   this.update();
//   return this._div;
// };
//
// info.update = function (props){
//   this._div.innerHTML = '<h4>Migration Info</h4>' + (props ? '<h2>' + props.name + '</h2>' + '<p>' + props.countryInfo + '</p>' + 'Click for Migration Path' : '<b>Hover over a country</b>');
// };

// CREATE COUNTRIES ON MAP INDIVIDUALLY

function makeLibya(){
  L.geoJson(Libya, {
    onEachFeature: onLibya
  }).addTo(map);
};
function makeMali(){
  L.geoJson(Mali, {
    onEachFeature: onMali
  }).addTo(map);
};
function makeNigeria(){
L.geoJson(Nigeria, {
  onEachFeature: onNigeria
}).addTo(map);
};
function makeSenegal(){
L.geoJson(Senegal, {
  onEachFeature: onSenegal
}).addTo(map);
};
function makeIvoryCoast(){
L.geoJson(IvoryCoast, {
  onEachFeature: onIvoryCoast
}).addTo(map);
};
function makeEthiopia(){
L.geoJson(Ethiopia, {
  onEachFeature: onEthiopia
}).addTo(map);
};
function makeSomalia(){
L.geoJson(Somalia, {
  onEachFeature: onSomalia
}).addTo(map);
};
function makeEritrea(){
L.geoJson(Eritrea, {
  onEachFeature: onEritrea
}).addTo(map);
};
function makeSyria(){
L.geoJson(Syria, {
  onEachFeature: onSyria
}).addTo(map);
};
function makeGambia(){
  L.geoJson(Gambia, {
    onEachFeature: onGambia
  }).addTo(map);
}
function closeAllPopups(){
  map.closePopup();
};
function makeItaly(){
  L.geoJson(Italy, {
    onEachFeature: onItaly
  }).addTo(map);
};

function startCountries(){
  makeMali();
  makeSenegal();
  makeIvoryCoast();
  makeNigeria();
  // makeEthiopia();
  // makeSomalia();
  makeEritrea();
  makeLibya();
  makeSyria();
  makeItaly();
  makeGambia();
  // info.addTo(map);
};

var Italy = {
  "type":"FeatureCollection","features":[
{"type":"Feature","properties":{"name":"Italy", "popupContent": "Italy", "countryInfo": "Italy, along with Turkey, is one of the first countries where migrants cross into Europe and find refuge."},"geometry":{"type":"MultiPolygon","coordinates":[[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]],[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]],[[[12.376485,46.767559],[13.806475,46.509306],[13.69811,46.016778],[13.93763,45.591016],[13.141606,45.736692],[12.328581,45.381778],[12.383875,44.885374],[12.261453,44.600482],[12.589237,44.091366],[13.526906,43.587727],[14.029821,42.761008],[15.14257,41.95514],[15.926191,41.961315],[16.169897,41.740295],[15.889346,41.541082],[16.785002,41.179606],[17.519169,40.877143],[18.376687,40.355625],[18.480247,40.168866],[18.293385,39.810774],[17.73838,40.277671],[16.869596,40.442235],[16.448743,39.795401],[17.17149,39.4247],[17.052841,38.902871],[16.635088,38.843572],[16.100961,37.985899],[15.684087,37.908849],[15.687963,38.214593],[15.891981,38.750942],[16.109332,38.964547],[15.718814,39.544072],[15.413613,40.048357],[14.998496,40.172949],[14.703268,40.60455],[14.060672,40.786348],[13.627985,41.188287],[12.888082,41.25309],[12.106683,41.704535],[11.191906,42.355425],[10.511948,42.931463],[10.200029,43.920007],[9.702488,44.036279],[8.888946,44.366336],[8.428561,44.231228],[7.850767,43.767148],[7.435185,43.693845],[7.549596,44.127901],[7.007562,44.254767],[6.749955,45.028518],[7.096652,45.333099],[6.802355,45.70858],[6.843593,45.991147],[7.273851,45.776948],[7.755992,45.82449],[8.31663,46.163642],[8.489952,46.005151],[8.966306,46.036932],[9.182882,46.440215],[9.922837,46.314899],[10.363378,46.483571],[10.442701,46.893546],[11.048556,46.751359],[11.164828,46.941579],[12.153088,47.115393],[12.376485,46.767559]]]]}}
]};
