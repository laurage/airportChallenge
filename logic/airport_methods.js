function airportHasSpace(airport){
  return airport.capacity > airport.planesInAirport.length;
}

function updateAirport(plane, airport){
  airport.planesInAirport.push(plane.number);
  return airport;
}

module.exports.airportHasSpace = airportHasSpace;
module.exports.updateAirport = updateAirport;
