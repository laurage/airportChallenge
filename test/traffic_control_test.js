var expect = require('chai').expect;

describe("TRAFFIC CONTROL METHODS TESTS", function(){

  describe("planeCanLand", function(){

    var planeCanLand = require("../logic/traffic_control.js").planeCanLand;

    var weather_clear = function(){return true};
    var weather_stormy = function(){return false};

    var planes = [
      {
        number: 233,
      }
    ];

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
    ];

    it("should return the number of the plane if the airport isn't full and the weather is clear", function(){
      expect(planeCanLand(planes[0], airports[0], weather_clear).number).to.be.equal(233);
    });

    it("should return false if the airport isn't full and the weather is stormy", function(){
      expect(planeCanLand(planes[0], airports[0], weather_stormy)).to.be.false;
    });

    it("should return false if the airport is full and the weather is stormy", function(){
      expect(planeCanLand(planes[0], airports[1], weather_stormy)).to.be.false;
    });

    it("should return false if the airport is full and the weather is clear", function(){
      expect(planeCanLand(planes[0], airports[1], weather_clear)).to.be.false;
    });
  });

  describe("planeLands", function(){
    var planeLands = require("../logic/traffic_control.js").planeLands;

    var planes = [
      {
        number: 233,
      }
    ];

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
    ];

    var weather_clear = function(){return true};
    var weather_stormy = function(){return false};

    it("adds the plane to the airport's list of planes if the plane can land", function(){
      expect(planeLands(planes[0], airports[0], weather_clear)).to.deep.equal([233]);
    })

    it("doesn't add the plane to the airport's list of planes if the plane can't land", function(){
      expect(planeLands(planes[0], airports[1], weather_clear)).to.deep.equal([234, 235]);
    })
  });
});
