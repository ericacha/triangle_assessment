describe('triangle', function() {
  it("if all three sides are not equal, it is a scalene", function() {
    expect(triangle(1,2,3)).to.equal("scalene");
  });
  it("if all three sides match, it is a triangle", function() {
    expect(triangle(1,1,1)).to.equal("scalene");
  });
  it("if  two sides match, it is an isosceles", function() {
    expect(triangle(2,2,1)).to.equal("isosceles");
  });

});
