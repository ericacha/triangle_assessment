describe('triangle', function() {
  it("if all three sides match, it is a equilateral", function() {
    expect(triangle(1,1,1)).to.equal("equilateral");
  });
  it("if  two sides match, it is an isosceles", function() {
    expect(triangle(2,2,1)).to.equal("isosceles");
  });
  it("if all three sides are not equal, it is a scalene", function() {
    expect(triangle(2,3,4)).to.equal("scalene");
  });
  it("if both sides are less or equal to the other, its not a triangle", function() {
    expect(triangle(2,2,8)).to.equal("Not a triangle");
  });

});
