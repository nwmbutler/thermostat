'use strict'

describe("Thermostat", function(){
    let thermostat
    beforeEach(function(){
        thermostat = new Thermostat();
    });
    it("always starts with the temp at 20 degrees", function(){
        // this.thermostat
        expect(thermostat.currentTemp()).toEqual(20);
    });
    it("allows the user to change temp up by 1 degree", function(){
        thermostat.up()
        expect(thermostat.currentTemp()).toEqual(21);
    });
    it("allows the user to change temp down by 1 degree", function(){
        thermostat.down()
        expect(thermostat.currentTemp()).toEqual(19);
    });
    it("has a minimum temp of 10 degrees", function(){
        for( var degree = 0; degree < 10; degree+= 1){
        thermostat.down();
        }
        expect(thermostat.currentTemp()).toEqual(10);
    });

    it("has a power saving mode, whilst true max 25 degrees", function(){
        for( var degree = 0; degree < 6; degree+=1){
            thermostat.up();
        }
        expect(thermostat.currentTemp()).toEqual(25);
    });

});