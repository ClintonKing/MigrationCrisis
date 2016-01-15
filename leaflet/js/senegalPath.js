function senegalPath(){
    // FIRST LINE STARTS HERE!!!!!!
    d3.json("geojson/fromSenegal.geojson", function(collection){

      var featuresdata = collection.features.filter(function(d){
        return d.properties.id == "route1"
      })

      var transform = d3.geo.transform({
        point: projectPoint
      });
      var d3path = d3.geo.path().projection(transform);

      var toLine = d3.svg.line()
      .interpolate("linear")
      .x(function(d){
        return applyLatLngToLayer(d).x
      })
      .y(function(d){
        return applyLatLngToLayer(d).y
      });


      //Makes the line
      var linePath = g.selectAll(".lineConnect")
        .data([featuresdata])
        .enter()
        .append("path")
        .attr("class", "lineConnect");

      //Makes the travelling circle
      var marker = g.append("circle")
        .attr("r", 10)
        .attr("id", "marker")
        .attr("class", "travelMarker");

      //Points on the line
      var ptFeatures = g.selectAll("circle")
        .data(featuresdata)
        .enter()
        .append("circle")
        .attr("r", 3)
        .attr("class", function(d){
          return "waypoints" + "c" + d.properties.time
        })
        .style("opacity", 0);

      //Beginning and End Points
      var originANDdestination = [featuresdata[0], featuresdata[7]]

      var begend = g.selectAll(".drinks")
        .data(originANDdestination)
        .enter()
        .append("circle", ".drinks")
        .attr("r", 5)
        .style("fill", "#54575c")
        .style("opacity", "1");

      //names
      var text = g.selectAll("text")
        .data(originANDdestination)
        .enter()
        .append("text")
        .text(function(d){
          return d.properties.name
        })
        .attr("class", "locnames")
        .attr("y", function(d){
          return -10 // moving text up 10px
        })


    map.on("viewreset", reset);

    //this puts stuff on the map

    reset();
    transition();

    function reset(){
      var bounds = d3path.bounds(collection),
        topLeft = bounds[0],
        bottomRight = bounds[1];

      begend.attr("transform",
        function(d){
          return "translate(" +
            applyLatLngToLayer(d).x + "," +
            applyLatLngToLayer(d).y + ")";
        });

        text.attr("transform",
          function(d){
            return "translate(" +
              applyLatLngToLayer(d).x + "," +
              applyLatLngToLayer(d).y + ")";
          });

        ptFeatures.attr("transform",
          function(d){
            return "translate(" +
              applyLatLngToLayer(d).x + "," +
              applyLatLngToLayer(d).y + ")";
          });

        marker.attr("transform",
          function(d){
            return "translate(" +
              applyLatLngToLayer(d).x + "," +
              applyLatLngToLayer(d).y + ")";
          });

        svg.attr("width", bottomRight[0] - topLeft[0] + 120)
          .attr("height", bottomRight[1] - topLeft[1] + 120)
          .style("left", topLeft[0] - 50 + "px")
          .style("top", topLeft[1] - 50 + "px");

        linePath.attr("d", toLine)
        g.attr("transform", "translate(" + (-topLeft[0] + 50) + "," + (-topLeft[1] + 50) + ")");

    } //end reset

    function transition(){
      linePath.transition()
        .duration(7500)
        .attrTween("stroke-dasharray", tweenDash)
        // .each("end", function(){
        //   d3.select(this).call(transition); //infinite loop
        //   ptFeatures.style("opacity", 0)
        // });
    }

    function tweenDash(){

      return function(t){

          //total line length
          var l = linePath.node().getTotalLength();
          interpolate = d3.interpolateString("0," + l, l + "," + l);

          var marker = d3.select("#marker");

          var p = linePath.node().getPointAtLength(t * l);

          //move marker
          marker.attr("transform", "translate(" + p.x + "," + p.y + ")");
          return interpolate(t);

      }
    }

    function projectPoint(x, y){
      var point = map.latLngToLayerPoint(new L.LatLng(y, x));
      this.stream.point(point.x, point.y);
    } //end projectPoint
});


function applyLatLngToLayer(d){
var y = d.geometry.coordinates[1]
var x = d.geometry.coordinates[0]
return map.latLngToLayerPoint(new L.LatLng(y, x))
}

};
