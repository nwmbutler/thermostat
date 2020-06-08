'use strict';

describe ('Feature Test:', function() {
  let airport;
  let plane;

  beforeEach( function() {
    airport = new Airport();
    plane = new Plane();
  })

  it ('Planes can be landed in an airport', function() {
    plane.land(airport);
    expect(airport.hanger).toContain(plane);
  });
});