var expect = require('chai').expect;

describe("AIRPORT METHODS TESTS", function(){

  describe("airportHasSpace", function(){

    var airportHasSpace = require('../logic/airport_methods.js').airportHasSpace;

    var airports = [
      {
        location: "paris",
        capacity: 5,
        planesInAirport: [],
      },
      {
        location: "london",
        capacity: 2,
        planesInAirport: [234, 235],
      }
    ]

    it("should return true when there are less planes than the airport full capacity", function(){
      expect(airportHasSpace(airports[0])).to.be.true;
    });
    it("should return false when there are as many planes as the airport full capacity", function(){
      expect(airportHasSpace(airports[0])).to.be.true;
    });
  });

  describe("updateAirport", function(){
    it("should add the plane in the airport where it has landed")
  });
});
