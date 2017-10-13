function airportHasSpace(airport){
  return airport.capacity > airport.planesInAirport.length;
}

module.exports.airportHasSpace = airportHasSpace;
