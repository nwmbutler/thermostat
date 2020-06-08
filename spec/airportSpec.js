'use strict'

describe('Airport', function(){

    let airport;
    let plane;

    beforeEach( function (){
        airport = new Airport();
        plane = new Plane();
    })

    it('should initialise an airport with an empty hanger', function(){
        expect(airport.hanger()).toEqual([])

    })

})
