function resetD3(){
  $(".leaflet-zoom-hide").empty();
};

// STYLE VARIABLES

var outlineStyle = {
  weight: 2,
  color: "#606a76",
  fillColor: "#78E880",
  opacity: 0.8,
  fillOpacity: 0.0
};

var highlightStyle = {
  weight: 4,
  color: "#f0ddc2",
  fillColor: "#f0ddc2",
  opacity: 1,
  fillOpacity: 0.5
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
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
};

// FUNCTIONS FOR INTERACTIVE COUNTRIES

function onMali(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      maliPath();
    });
};
function onSenegal(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      senegalPath();
    });
};
function onIvoryCoast(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      ivoryCoastPath();
    });
};function onNigeria(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      nigeriaPath();
    });
};
function onEthiopia(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      ethiopiaPath();
    });
};
function onSomalia(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      somaliaPath();
    });
};
function onEritrea(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      eritreaPath();
    });
};
function onLibya(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      sailBoat();
    });
};
function onSyria(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
      info.update(layer.feature.properties);
    });

    layer.on("mouseout", function(e){
      layer.setStyle(outlineStyle);
      info.update();
    });

    layer.on("click", function(){
      resetD3();
      syriaPath();
    });
};
function onItaly(feature, layer) {
  layer.setStyle(outlineStyle);

  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  };

    layer.on("mouseover", function(e){
      layer.setStyle(highlightStyle);
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
  info.addTo(map);
};

// INDIVIDUAL COUNTRY VARIABLES

var Tunisia = {
  "type": "Feature",
  "properties": {
    "popupContent": "This is Tunisia (geoJson Polygon)",
    "name": "Tunisia",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates":[[[9.482139926805274,30.307556057246188],[9.05560265466815,32.10269196220129],[8.439102817426118,32.50628489840082],[8.430472853233368,32.74833730725595],[7.612641635782182,33.34411489514896],[7.524481642292244,34.09737641045146],[8.140981479534304,34.65514598239379],[8.376367628623768,35.479876003555944],[8.217824334352315,36.433176988260286],[8.420964389691676,36.94642731378316],[9.509993523810607,37.349994411766545],[10.210002475636317,37.230001735984814],[10.180650262094531,36.724037787415085],[11.02886722173335,37.09210317641396],[11.100025668999251,36.899996039368915],[10.600004510143094,36.410000108377375],[10.593286573945138,35.94744436293281],[10.939518670300687,35.698984076473494],[10.807847120821009,34.83350718844919],[10.149592726287125,34.33077301689771],[10.339658644256616,33.78574168551532],[10.856836378633687,33.76874013929128],[11.108500603895122,33.293342800422195],[11.488787469131012,33.13699575452314],[11.432253452203696,32.368903103152874],[10.944789666394456,32.081814683555365],[10.636901482799487,31.761420803345757],[9.950225050505082,31.376069647745258],[10.056575148161755,30.9618313664936],[9.970017124072854,30.53932485607524],[9.482139926805274,30.307556057246188]]]
  }
};


var Mali = {
  "type": "Feature",
  "properties": {
    "popupContent": "Mali",
    "name": "Mali",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[-12.17075,14.616834],[-11.834208,14.799097],[-11.666078,15.388208],[-11.349095,15.411256],[-10.650791,15.132746],[-10.086846,15.330486],[-9.700255,15.264107],[-9.550238,15.486497],[-5.537744,15.50169],[-5.315277,16.201854],[-5.488523,16.325102],[-5.971129,20.640833],[-6.453787,24.956591],[-4.923337,24.974574],[-1.550055,22.792666],[1.823228,20.610809],[2.060991,20.142233],[2.683588,19.85623],[3.146661,19.693579],[3.158133,19.057364],[4.267419,19.155265],[4.27021,16.852227],[3.723422,16.184284],[3.638259,15.56812],[2.749993,15.409525],[1.385528,15.323561],[1.015783,14.968182],[0.374892,14.928908],[-0.266257,14.924309],[-0.515854,15.116158],[-1.066363,14.973815],[-2.001035,14.559008],[-2.191825,14.246418],[-2.967694,13.79815],[-3.103707,13.541267],[-3.522803,13.337662],[-4.006391,13.472485],[-4.280405,13.228444],[-4.427166,12.542646],[-5.220942,11.713859],[-5.197843,11.375146],[-5.470565,10.95127],[-5.404342,10.370737],[-5.816926,10.222555],[-6.050452,10.096361],[-6.205223,10.524061],[-6.493965,10.411303],[-6.666461,10.430811],[-6.850507,10.138994],[-7.622759,10.147236],[-7.89959,10.297382],[-8.029944,10.206535],[-8.335377,10.494812],[-8.282357,10.792597],[-8.407311,10.909257],[-8.620321,10.810891],[-8.581305,11.136246],[-8.376305,11.393646],[-8.786099,11.812561],[-8.905265,12.088358],[-9.127474,12.30806],[-9.327616,12.334286],[-9.567912,12.194243],[-9.890993,12.060479],[-10.165214,11.844084],[-10.593224,11.923975],[-10.87083,12.177887],[-11.036556,12.211245],[-11.297574,12.077971],[-11.456169,12.076834],[-11.513943,12.442988],[-11.467899,12.754519],[-11.553398,13.141214],[-11.927716,13.422075],[-12.124887,13.994727],[-12.17075,14.616834]]]
  }
};

var Senegal = {
  "type": "Feature",
  "properties": {
    "popupContent": "Senegal",
    "name": "Senegal",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[-16.713729,13.594959],[-17.126107,14.373516],[-17.625043,14.729541],[-17.185173,14.919477],[-16.700706,15.621527],[-16.463098,16.135036],[-16.12069,16.455663],[-15.623666,16.369337],[-15.135737,16.587282],[-14.577348,16.598264],[-14.099521,16.304302],[-13.435738,16.039383],[-12.830658,15.303692],[-12.17075,14.616834],[-12.124887,13.994727],[-11.927716,13.422075],[-11.553398,13.141214],[-11.467899,12.754519],[-11.513943,12.442988],[-11.658301,12.386583],[-12.203565,12.465648],[-12.278599,12.35444],[-12.499051,12.33209],[-13.217818,12.575874],[-13.700476,12.586183],[-15.548477,12.62817],[-15.816574,12.515567],[-16.147717,12.547762],[-16.677452,12.384852],[-16.841525,13.151394],[-15.931296,13.130284],[-15.691001,13.270353],[-15.511813,13.27857],[-15.141163,13.509512],[-14.712197,13.298207],[-14.277702,13.280585],[-13.844963,13.505042],[-14.046992,13.794068],[-14.376714,13.62568],[-14.687031,13.630357],[-15.081735,13.876492],[-15.39877,13.860369],[-15.624596,13.623587],[-16.713729,13.594959]]]
  }
};

var IvoryCoast = {
  "type": "Feature",
  "properties": {
    "popupContent": "Ivory Coast",
    "name": "Ivory Coast",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[-2.856125,4.994476],[-3.311084,4.984296],[-4.00882,5.179813],[-4.649917,5.168264],[-5.834496,4.993701],[-6.528769,4.705088],[-7.518941,4.338288],[-7.712159,4.364566],[-7.635368,5.188159],[-7.539715,5.313345],[-7.570153,5.707352],[-7.993693,6.12619],[-8.311348,6.193033],[-8.60288,6.467564],[-8.385452,6.911801],[-8.485446,7.395208],[-8.439298,7.686043],[-8.280703,7.68718],[-8.221792,8.123329],[-8.299049,8.316444],[-8.203499,8.455453],[-7.8321,8.575704],[-8.079114,9.376224],[-8.309616,9.789532],[-8.229337,10.12902],[-8.029944,10.206535],[-7.89959,10.297382],[-7.622759,10.147236],[-6.850507,10.138994],[-6.666461,10.430811],[-6.493965,10.411303],[-6.205223,10.524061],[-6.050452,10.096361],[-5.816926,10.222555],[-5.404342,10.370737],[-4.954653,10.152714],[-4.779884,9.821985],[-4.330247,9.610835],[-3.980449,9.862344],[-3.511899,9.900326],[-2.827496,9.642461],[-2.56219,8.219628],[-2.983585,7.379705],[-3.24437,6.250472],[-2.810701,5.389051],[-2.856125,4.994476]]]
  }
};

var Nigeria = {
  "type": "Feature",
  "properties": {
    "popupContent": "Nigeria",
    "name": "Nigeria",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[8.500288,4.771983],[7.462108,4.412108],[7.082596,4.464689],[6.698072,4.240594],[5.898173,4.262453],[5.362805,4.887971],[5.033574,5.611802],[4.325607,6.270651],[3.57418,6.2583],[2.691702,6.258817],[2.749063,7.870734],[2.723793,8.506845],[2.912308,9.137608],[3.220352,9.444153],[3.705438,10.06321],[3.60007,10.332186],[3.797112,10.734746],[3.572216,11.327939],[3.61118,11.660167],[3.680634,12.552903],[3.967283,12.956109],[4.107946,13.531216],[4.368344,13.747482],[5.443058,13.865924],[6.445426,13.492768],[6.820442,13.115091],[7.330747,13.098038],[7.804671,13.343527],[9.014933,12.826659],[9.524928,12.851102],[10.114814,13.277252],[10.701032,13.246918],[10.989593,13.387323],[11.527803,13.32898],[12.302071,13.037189],[13.083987,13.596147],[13.318702,13.556356],[13.995353,12.461565],[14.181336,12.483657],[14.577178,12.085361],[14.468192,11.904752],[14.415379,11.572369],[13.57295,10.798566],[13.308676,10.160362],[13.1676,9.640626],[12.955468,9.417772],[12.753672,8.717763],[12.218872,8.305824],[12.063946,7.799808],[11.839309,7.397042],[11.745774,6.981383],[11.058788,6.644427],[10.497375,7.055358],[10.118277,7.03877],[9.522706,6.453482],[9.233163,6.444491],[8.757533,5.479666],[8.500288,4.771983]]]
  }
};

var Ethiopia = {
  "type": "Feature",
  "properties": {
    "popupContent": "Ethiopia",
    "name": "Ethiopia",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[37.90607,14.95943],[38.51295,14.50547],[39.0994,14.74064],[39.34061,14.53155],[40.02625,14.51959],[40.8966,14.11864],[41.1552,13.77333],[41.59856,13.45209],[42.00975,12.86582],[42.35156,12.54223],[42,12.1],[41.66176,11.6312],[41.73959,11.35511],[41.75557,11.05091],[42.31414,11.0342],[42.55493,11.10511],[42.776852,10.926879],[42.55876,10.57258],[42.92812,10.02194],[43.29699,9.54048],[43.67875,9.18358],[46.94834,7.99688],[47.78942,8.003],[44.9636,5.00162],[43.66087,4.95755],[42.76967,4.25259],[42.12861,4.23413],[41.855083,3.918912],[41.1718,3.91909],[40.76848,4.25702],[39.85494,3.83879],[39.559384,3.42206],[38.89251,3.50074],[38.67114,3.61607],[38.43697,3.58851],[38.120915,3.598605],[36.855093,4.447864],[36.159079,4.447864],[35.817448,4.776966],[35.817448,5.338232],[35.298007,5.506],[34.70702,6.59422],[34.25032,6.82607],[34.0751,7.22595],[33.56829,7.71334],[32.95418,7.78497],[33.2948,8.35458],[33.8255,8.37916],[33.97498,8.68456],[33.96162,9.58358],[34.25745,10.63009],[34.73115,10.91017],[34.83163,11.31896],[35.26049,12.08286],[35.86363,12.57828],[36.27022,13.56333],[36.42951,14.42211],[37.59377,14.2131],[37.90607,14.95943]]]
  }
};

var Somalia = {
  "type": "Feature",
  "properties": {
    "popupContent": "Somalia",
    "name": "Somalia",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [
[
[
49.779052734375,
11.512322409887743
],
[
50.086669921875,
11.544616463449668
],
[
50.35034179687499,
11.630715737981486
],
[
50.73202,
12.0219
],
[
50.943603515625,
11.899603531895703
],
[
51.295166015625,
11.792079975540577
],
[
51.13387,
11.74815
],
[
51.13037109374999,
11.135287077054238
],
[
51.04531,
10.6409
],
[
50.83418,
10.27972
],
[
50.55239,
9.19874
],
[
50.07092,
8.08173
],
[
49.4527,
6.80466
],
[
48.59455,
5.33911
],
[
47.74079,
4.2194
],
[
46.56476,
2.85529
],
[
45.56399,
2.04576
],
[
44.06815,
1.05283
],
[
43.13597,
0.2922
],
[
42.04157,
-0.91916
],
[
41.81095,
-1.44647
],
[
41.58513,
-1.68325
],
[
40.993,
-0.85829
],
[
40.98105,
2.78452
],
[
41.855083,
3.918912
],
[
42.12861,
4.23413
],
[
42.76967,
4.25259
],
[
43.66087,
4.95755
],
[
44.9636,
5.00162
],
[
47.78942,
8.003
],
[
47.010498046875,
7.98307772023843
],
[
44.044189453125,
9.026152779146141
],
[
43.099365234375,
9.849803938000607
],
[
42.681884765625,
10.617418067950307
],
[
43.231201171875,
11.447723189292294
],
[
43.978271484375,
10.649811055745865
],
[
44.307861328125,
10.4121831586675
],
[
44.527587890625,
10.368958499166258
],
[
44.879150390625,
10.433793243184432
],
[
45.823974609375,
10.844096320683942
],
[
46.483154296875,
10.671404468527449
],
[
47.373046875,
11.135287077054238
],
[
47.999267578125,
11.070602913977819
],
[
48.44970703125,
11.29693444059631
],
[
49.32861328125,
11.329253026617318
],
[
49.779052734375,
11.512322409887743
]
]
]
  }
};

var Eritrea = {
  "type": "Feature",
  "properties": {
    "popupContent": "Eritrea",
    "name": "Eritrea",
    "countryInfo": "Stuff"
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[42.35156,12.54223],[42.00975,12.86582],[41.59856,13.45209],[41.155194,13.77332],[40.8966,14.11864],[40.026219,14.519579],[39.34061,14.53155],[39.0994,14.74064],[38.51295,14.50547],[37.90607,14.95943],[37.59377,14.2131],[36.42951,14.42211],[36.323189,14.822481],[36.75386,16.291874],[36.85253,16.95655],[37.16747,17.26314],[37.904,17.42754],[38.41009,17.998307],[38.990623,16.840626],[39.26611,15.922723],[39.814294,15.435647],[41.179275,14.49108],[41.734952,13.921037],[42.276831,13.343992],[42.589576,13.000421],[43.081226,12.699639],[42.779642,12.455416],[42.35156,12.54223]]]
  }
};

var Libya = {
  "type": "Feature",
  "properties": {
    "popupContent": "Libya",
    "name": "Libya",
    "countryInfo": "Thousands of Libyans are fleeing by boat across the mediterranean to escape poverty and hunger. Libya is also a major pass-through for refugees fleeing other African nations, as most boats crossing to Italy leave from the Libyan capital of Tripoli."
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[14.8513,22.86295],[14.143871,22.491289],[13.581425,23.040506],[11.999506,23.471668],[11.560669,24.097909],[10.771364,24.562532],[10.303847,24.379313],[9.948261,24.936954],[9.910693,25.365455],[9.319411,26.094325],[9.716286,26.512206],[9.629056,27.140953],[9.756128,27.688259],[9.683885,28.144174],[9.859998,28.95999],[9.805634,29.424638],[9.48214,30.307556],[9.970017,30.539325],[10.056575,30.961831],[9.950225,31.37607],[10.636901,31.761421],[10.94479,32.081815],[11.432253,32.368903],[11.488787,33.136996],[12.66331,32.79278],[13.08326,32.87882],[13.91868,32.71196],[15.24563,32.26508],[15.71394,31.37626],[16.61162,31.18218],[18.02109,30.76357],[19.08641,30.26639],[19.57404,30.52582],[20.05335,30.98576],[19.82033,31.75179],[20.13397,32.2382],[20.85452,32.7068],[21.54298,32.8432],[22.89576,32.63858],[23.2368,32.19149],[23.60913,32.18726],[23.9275,32.01667],[24.92114,31.89936],[25.16482,31.56915],[24.80287,31.08929],[24.95762,30.6616],[24.70007,30.04419],[25,29.238655],[25,25.6825],[25,22],[25,20.00304],[23.85,20],[23.83766,19.58047],[19.84926,21.49509],[15.86085,23.40972],[14.8513,22.86295]]]
  }
};

var Syria = {
  "type": "Feature",
  "properties": {
    "popupContent": "Syria",
    "name": "Syria",
    "countryInfo": "A country divided by civil-war, Syria is the largest source of migrants towards Europe currently with multiple millions of Syrians having fled terror, oppression, hunger, and poverty for the hope of a better life."
  },
  "geometry": {
    "type": "Polygon",

    "coordinates": [[[38.792341,33.378686],[36.834062,32.312938],[35.719918,32.709192],[35.700798,32.716014],[35.836397,32.868123],[35.821101,33.277426],[36.06646,33.824912],[36.61175,34.201789],[36.448194,34.593935],[35.998403,34.644914],[35.905023,35.410009],[36.149763,35.821535],[36.41755,36.040617],[36.685389,36.259699],[36.739494,36.81752],[37.066761,36.623036],[38.167727,36.90121],[38.699891,36.712927],[39.52258,36.716054],[40.673259,37.091276],[41.212089,37.074352],[42.349591,37.229873],[41.837064,36.605854],[41.289707,36.358815],[41.383965,35.628317],[41.006159,34.419372],[38.792341,33.378686]]]
  }
};

var Italy = {
  "type":"FeatureCollection","features":[
{"type":"Feature","properties":{"name":"Italy", "popupContent": "Italy", "countryInfo": "Italy, along with Turkey, is one of the first countries where migrants cross into Europe and find refuge."},"geometry":{"type":"MultiPolygon","coordinates":[[[[15.520376,38.231155],[15.160243,37.444046],[15.309898,37.134219],[15.099988,36.619987],[14.335229,36.996631],[13.826733,37.104531],[12.431004,37.61295],[12.570944,38.126381],[13.741156,38.034966],[14.761249,38.143874],[15.520376,38.231155]]],[[[9.210012,41.209991],[9.809975,40.500009],[9.669519,39.177376],[9.214818,39.240473],[8.806936,38.906618],[8.428302,39.171847],[8.388253,40.378311],[8.159998,40.950007],[8.709991,40.899984],[9.210012,41.209991]]],[[[12.376485,46.767559],[13.806475,46.509306],[13.69811,46.016778],[13.93763,45.591016],[13.141606,45.736692],[12.328581,45.381778],[12.383875,44.885374],[12.261453,44.600482],[12.589237,44.091366],[13.526906,43.587727],[14.029821,42.761008],[15.14257,41.95514],[15.926191,41.961315],[16.169897,41.740295],[15.889346,41.541082],[16.785002,41.179606],[17.519169,40.877143],[18.376687,40.355625],[18.480247,40.168866],[18.293385,39.810774],[17.73838,40.277671],[16.869596,40.442235],[16.448743,39.795401],[17.17149,39.4247],[17.052841,38.902871],[16.635088,38.843572],[16.100961,37.985899],[15.684087,37.908849],[15.687963,38.214593],[15.891981,38.750942],[16.109332,38.964547],[15.718814,39.544072],[15.413613,40.048357],[14.998496,40.172949],[14.703268,40.60455],[14.060672,40.786348],[13.627985,41.188287],[12.888082,41.25309],[12.106683,41.704535],[11.191906,42.355425],[10.511948,42.931463],[10.200029,43.920007],[9.702488,44.036279],[8.888946,44.366336],[8.428561,44.231228],[7.850767,43.767148],[7.435185,43.693845],[7.549596,44.127901],[7.007562,44.254767],[6.749955,45.028518],[7.096652,45.333099],[6.802355,45.70858],[6.843593,45.991147],[7.273851,45.776948],[7.755992,45.82449],[8.31663,46.163642],[8.489952,46.005151],[8.966306,46.036932],[9.182882,46.440215],[9.922837,46.314899],[10.363378,46.483571],[10.442701,46.893546],[11.048556,46.751359],[11.164828,46.941579],[12.153088,47.115393],[12.376485,46.767559]]]]}}
]};

var Tripoli = {
  "type": "Feature",
  "properties": {
    "name": "Tripoli",
    "popupContent": "City of Tripoli"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [13.191769,32.882431]
  }
};

// GROUP OF ALL COUNTRIES

var allCountries = [Mali, Senegal, IvoryCoast, Nigeria, Ethiopia, Somalia, Eritrea, Libya, Syria]

// VARIABLE FOR CANOE PATH

var canoeLine = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
          13.33740234375,
          32.91648534731439
          ],
          [
            13.38134765625,
            35.24561909420681
          ],
          [
            13.9306640625,
            37.17782559332976
          ]
        ]
      }
    }


function sailBoat(){
  setTimeout(function(){
    marker1.setLatLng([
          32.99945000822839,
            13.172607421875
          ]);
  }, 0);
  setTimeout(function(){
    marker1.setLatLng([
      33.091541548655215,
            13.2275390625
          ]);
  }, 40);
  setTimeout(function(){
    marker1.setLatLng([
      33.22949814144951,
            13.271484375
          ]);
  }, 80);
  setTimeout(function(){
    marker1.setLatLng([
      33.33970700424026,
            13.3154296875
          ]);
  }, 120);
  setTimeout(function(){
    marker1.setLatLng([
      33.47727218776036,
            13.348388671875
          ]);
  }, 160);
  setTimeout(function(){
    marker1.setLatLng([
      33.58716733904656,
            13.38134765625
          ]);
  }, 200);
  setTimeout(function(){
    marker1.setLatLng([
      33.73347670599255,
            13.403320312499998
          ]);
  }, 240);
  setTimeout(function(){
    marker1.setLatLng([
      33.8521697014074,
            13.42529296875
          ]);
  }, 280);
  setTimeout(function(){
    marker1.setLatLng([
      33.97980872872457,
            13.447265624999998
          ]);
  }, 320);
  setTimeout(function(){
    marker1.setLatLng([
      34.098159345215535,
            13.46923828125
          ]);
  }, 360);
  setTimeout(function(){
    marker1.setLatLng([
      34.17999758688084,
            13.4912109375
          ]);
  }, 400);
  setTimeout(function(){
    marker1.setLatLng([
      34.27083595165,
            13.51318359375
          ]);
  }, 440);
  setTimeout(function(){
    marker1.setLatLng([
      34.379712580462204,
            13.53515625
          ]);
  }, 480);
  setTimeout(function(){
    marker1.setLatLng([
      34.49750272138159,
            13.546142578125
          ]);
  }, 520);
  setTimeout(function(){
    marker1.setLatLng([
      34.59704151614417,
            13.5791015625
          ]);
  }, 560);
  setTimeout(function(){
    marker1.setLatLng([
      34.72355492704219,
            13.60107421875
          ]);
  }, 600);
  setTimeout(function(){
    marker1.setLatLng([
      34.84085858477277,
            13.60107421875
          ]);
  }, 640);
  setTimeout(function(){
    marker1.setLatLng([
      34.994003757575776,
            13.590087890625
          ]);
  }, 680);
  setTimeout(function(){
    marker1.setLatLng([
      35.10193405724606,
            13.546142578125
          ]);
  }, 720);
  setTimeout(function(){
    marker1.setLatLng([
      35.29943548054545,
            13.53515625
          ]);
  }, 760);
  setTimeout(function(){
    marker1.setLatLng([
      35.460669951495305,
            13.53515625
          ]);
  }, 800);
  setTimeout(function(){
    marker1.setLatLng([
      35.55904339525896,
            13.55712890625
          ]);
  }, 840);
  setTimeout(function(){
    marker1.setLatLng([
      35.65729624809628,
            13.590087890625
          ]);
  }, 880);
  setTimeout(function(){
    marker1.setLatLng([
      35.755428369259626,
            13.60107421875
          ]);
  }, 920);
  setTimeout(function(){
    marker1.setLatLng([
      35.88905007936091,
            13.612060546875
          ]);
  }, 960);
  setTimeout(function(){
    marker1.setLatLng([
      35.96022296929667,
            13.645019531249998
          ]);
  }, 1000);
  setTimeout(function(){
    marker1.setLatLng([
      36.075742215627,
            13.645019531249998
          ]);
  }, 1040);
  setTimeout(function(){
    marker1.setLatLng([
      36.155617833818525,
            13.73291015625
          ]);
  }, 1080);
  setTimeout(function(){
    marker1.setLatLng([
      36.26199220445664,
            13.7548828125
          ]);
  }, 1120);
  setTimeout(function(){
    marker1.setLatLng([
      36.38591277287651,
            13.765869140624998
          ]);
  }, 1160);
  setTimeout(function(){
    marker1.setLatLng([
      36.474306755095206,
            13.787841796875
          ]);
  }, 1200);
  setTimeout(function(){
    marker1.setLatLng([
      36.57142382346277,
            13.809814453125
          ]);
  }, 1240);
  setTimeout(function(){
    marker1.setLatLng([
      36.677230602346214,
            13.842773437499998
          ]);
  }, 1280);
  setTimeout(function(){
    marker1.setLatLng([
      36.730079507078415,
            13.875732421875
          ]);
  }, 1320);
  setTimeout(function(){
    marker1.setLatLng([
      36.778492404594154,
            13.8922119140625
          ]);
  }, 1360);
  setTimeout(function(){
    marker1.setLatLng([
      36.83127162140714,
            13.897705078125
          ]);
  }, 1400);
  setTimeout(function(){
    marker1.setLatLng([
      36.89719446989036,
            13.9141845703125
          ]);
  }, 1440);
  setTimeout(function(){
    marker1.setLatLng([
      36.97183825093165,
            13.919677734375
          ]);
  }, 1480);
  setTimeout(function(){
    marker1.setLatLng([
      37.046408899699564,
            13.9361572265625
          ]);
  }, 1520);
  setTimeout(function(){
    marker1.setLatLng([
      37.142803443716836,
            13.95263671875
          ]);
  }, 1560);
  setTimeout(function(){
    marker1.setLatLng([
      37.23470197166817,
            13.963623046874998
          ]);
  }, 1600);
  setTimeout(function(){
    marker1.setLatLng([
      37.304644804751106,
            13.974609375
          ]);
  }, 1640);
};
