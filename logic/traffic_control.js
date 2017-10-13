var airportHasSpace = require("./airport_methods").airportHasSpace;

function planeCanLand(plane, airport, weather){
  return weather() ? airportHasSpace(airport) && plane.number : false;
}

module.exports.planeCanLand = planeCanLand;
