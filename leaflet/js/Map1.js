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
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      maliPath();
    });
};
function onSenegal(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      senegalPath();
    });
};
function onIvoryCoast(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      ivoryCoastPath();
    });
};function onNigeria(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      nigeriaPath();
    });
};
function onEthiopia(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      ethiopiaPath();
    });
};
function onSomalia(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      somaliaPath();
    });
};
function onEritrea(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      eritreaPath();
    });
};
function onLibya(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      libyaPath();
    });
};
function onSyria(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      syriaPath();
    });
};
function onGambia(feature, layer) {
  layer.setStyle(altOutlineStyle);

  // does this feature have a property named popupContent?
  // if (feature.properties && feature.properties.popupContent) {
  //     layer.bindPopup(feature.properties.popupContent);
  // };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(altOutlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      gambiaPath();
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

var info = L.control();

info.onAdd = function (map){
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props){
  this._div.innerHTML = '<h4>Migration Info</h4>' + (props ? '<h2>' + props.name + '</h2>' + '<p>' + props.countryInfo + '</p>' + 'Click for Migration Path' : '<b>Hover over a country</b>');
};

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
  makeEthiopia();
  makeSomalia();
  makeEritrea();
  makeLibya();
  makeSyria();
  makeItaly();
  makeGambia();
  info.addTo(map);
};

var Italy = {
  "type":"FeatureCollection","features":[
{"type":"Feature","properties":{"name":"Italy", "popupContent": "Italy", "countryInfo": "Italy, along with Turkey, is one of the first countries where migrants cross into Europe and find refuge."},"geometry":{"type":"MultiPolygon","coordinates":[[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]],[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]],[[[12.376485,46.767559],[13.806475,46.509306],[13.69811,46.016778],[13.93763,45.591016],[13.141606,45.736692],[12.328581,45.381778],[12.383875,44.885374],[12.261453,44.600482],[12.589237,44.091366],[13.526906,43.587727],[14.029821,42.761008],[15.14257,41.95514],[15.926191,41.961315],[16.169897,41.740295],[15.889346,41.541082],[16.785002,41.179606],[17.519169,40.877143],[18.376687,40.355625],[18.480247,40.168866],[18.293385,39.810774],[17.73838,40.277671],[16.869596,40.442235],[16.448743,39.795401],[17.17149,39.4247],[17.052841,38.902871],[16.635088,38.843572],[16.100961,37.985899],[15.684087,37.908849],[15.687963,38.214593],[15.891981,38.750942],[16.109332,38.964547],[15.718814,39.544072],[15.413613,40.048357],[14.998496,40.172949],[14.703268,40.60455],[14.060672,40.786348],[13.627985,41.188287],[12.888082,41.25309],[12.106683,41.704535],[11.191906,42.355425],[10.511948,42.931463],[10.200029,43.920007],[9.702488,44.036279],[8.888946,44.366336],[8.428561,44.231228],[7.850767,43.767148],[7.435185,43.693845],[7.549596,44.127901],[7.007562,44.254767],[6.749955,45.028518],[7.096652,45.333099],[6.802355,45.70858],[6.843593,45.991147],[7.273851,45.776948],[7.755992,45.82449],[8.31663,46.163642],[8.489952,46.005151],[8.966306,46.036932],[9.182882,46.440215],[9.922837,46.314899],[10.363378,46.483571],[10.442701,46.893546],[11.048556,46.751359],[11.164828,46.941579],[12.153088,47.115393],[12.376485,46.767559]]]]}}
]};

// VARIABLE FOR CANOE PATH

// var canoeLine = {
//       "type": "Feature",
//       "properties": {},
//       "geometry": {
//         "type": "LineString",
//         "coordinates": [
//           [
//           13.33740234375,
//           32.91648534731439
//           ],
//           [
//             13.38134765625,
//             35.24561909420681
//           ],
//           [
//             13.9306640625,
//             37.17782559332976
//           ]
//         ]
//       }
//     }


// function sailBoat(){
//   setTimeout(function(){
//     marker1.setLatLng([
//           32.99945000822839,
//             13.172607421875
//           ]);
//   }, 0);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.091541548655215,
//             13.2275390625
//           ]);
//   }, 40);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.22949814144951,
//             13.271484375
//           ]);
//   }, 80);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.33970700424026,
//             13.3154296875
//           ]);
//   }, 120);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.47727218776036,
//             13.348388671875
//           ]);
//   }, 160);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.58716733904656,
//             13.38134765625
//           ]);
//   }, 200);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.73347670599255,
//             13.403320312499998
//           ]);
//   }, 240);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.8521697014074,
//             13.42529296875
//           ]);
//   }, 280);
//   setTimeout(function(){
//     marker1.setLatLng([
//       33.97980872872457,
//             13.447265624999998
//           ]);
//   }, 320);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.098159345215535,
//             13.46923828125
//           ]);
//   }, 360);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.17999758688084,
//             13.4912109375
//           ]);
//   }, 400);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.27083595165,
//             13.51318359375
//           ]);
//   }, 440);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.379712580462204,
//             13.53515625
//           ]);
//   }, 480);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.49750272138159,
//             13.546142578125
//           ]);
//   }, 520);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.59704151614417,
//             13.5791015625
//           ]);
//   }, 560);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.72355492704219,
//             13.60107421875
//           ]);
//   }, 600);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.84085858477277,
//             13.60107421875
//           ]);
//   }, 640);
//   setTimeout(function(){
//     marker1.setLatLng([
//       34.994003757575776,
//             13.590087890625
//           ]);
//   }, 680);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.10193405724606,
//             13.546142578125
//           ]);
//   }, 720);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.29943548054545,
//             13.53515625
//           ]);
//   }, 760);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.460669951495305,
//             13.53515625
//           ]);
//   }, 800);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.55904339525896,
//             13.55712890625
//           ]);
//   }, 840);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.65729624809628,
//             13.590087890625
//           ]);
//   }, 880);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.755428369259626,
//             13.60107421875
//           ]);
//   }, 920);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.88905007936091,
//             13.612060546875
//           ]);
//   }, 960);
//   setTimeout(function(){
//     marker1.setLatLng([
//       35.96022296929667,
//             13.645019531249998
//           ]);
//   }, 1000);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.075742215627,
//             13.645019531249998
//           ]);
//   }, 1040);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.155617833818525,
//             13.73291015625
//           ]);
//   }, 1080);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.26199220445664,
//             13.7548828125
//           ]);
//   }, 1120);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.38591277287651,
//             13.765869140624998
//           ]);
//   }, 1160);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.474306755095206,
//             13.787841796875
//           ]);
//   }, 1200);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.57142382346277,
//             13.809814453125
//           ]);
//   }, 1240);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.677230602346214,
//             13.842773437499998
//           ]);
//   }, 1280);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.730079507078415,
//             13.875732421875
//           ]);
//   }, 1320);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.778492404594154,
//             13.8922119140625
//           ]);
//   }, 1360);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.83127162140714,
//             13.897705078125
//           ]);
//   }, 1400);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.89719446989036,
//             13.9141845703125
//           ]);
//   }, 1440);
//   setTimeout(function(){
//     marker1.setLatLng([
//       36.97183825093165,
//             13.919677734375
//           ]);
//   }, 1480);
//   setTimeout(function(){
//     marker1.setLatLng([
//       37.046408899699564,
//             13.9361572265625
//           ]);
//   }, 1520);
//   setTimeout(function(){
//     marker1.setLatLng([
//       37.142803443716836,
//             13.95263671875
//           ]);
//   }, 1560);
//   setTimeout(function(){
//     marker1.setLatLng([
//       37.23470197166817,
//             13.963623046874998
//           ]);
//   }, 1600);
//   setTimeout(function(){
//     marker1.setLatLng([
//       37.304644804751106,
//             13.974609375
//           ]);
//   }, 1640);
// };
