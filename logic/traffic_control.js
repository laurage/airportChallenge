var airportHasSpace = require("./airport_methods").airportHasSpace;
var updateAirport = require("./airport_methods").updateAirport;

function planeCanLand(plane, airport, weather){
  return weather() ? airportHasSpace(airport) && plane : false;
}

function planeLands(plane, airport, weather){
  // should planeCanLand passed as an argument of planeLands and mocked?
  // or should I merge planeCanLand and planeLands together, called planeLands?
  if (planeCanLand(plane, airport, weather)) updateAirport(plane, airport);
  return airport.planesInAirport;
}

module.exports.planeCanLand = planeCanLand;
module.exports.planeLands = planeLands;
