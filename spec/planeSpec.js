'use strict';

describe('Plane', function() {
  let plane;

  beforeEach(function() {
    plane = new plane;
  });

  it ('Should have a #land method on the plane class', function() {
    expect(plane.land).not.toBeUndefined();
  })
});