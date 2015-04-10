desrcribe('scrabble'), function() {
  it("the score for letter A will return 1", function() {
    expect(scrabble('A')).to.equal(1);
  });
});
