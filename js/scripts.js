//working with three inputs for each sides
var triangle = function(s1,s2,s3) {

//the return type of what type of triangle
var triangleType = "none";


//compare each sides of the triangle to make sure they are all the same
if ((s1 === s2) && (s2 ===s3) && (s3 === s1)) {
    $(".equilateral").show();
    triangleType = "You have an equilateral!";
//to be a triangle, both sides must be less or equal to the other side
//compare all combination three sides for ex)2,2,8
//moved this function above 'isoscles', otherwise it would not output 'not a triangle' due to its condition
} else if ((s1 + s2 <= s3) || (s2 + s3 <= s1) || (s3 + s1 <= s2)) {
  $(".sad").show();
   triangleType = "Sorry, looks like it's not a triangle.";
//compare all combination of two sides of the triangle to make sure they are same
 } else if ((s1 === s2) || (s2 ===s3) || (s1 === s3)) {
   $(".isosceles").show();
    triangleType = "You have an isosceles!";
//if anything else, it becomes a scalene
//took awhile to realize ex)2,3,4 - in this case, both sides is greater than the other side. So it is a  triangle.
 } else {
    $(".scalene").show();
     triangleType = "You have a scalene!";
 }
//calling to return what is true
return triangleType;
};



$(document).ready(function() {
  $("form#triangle").submit(function(event){
      var s1 = parseInt($("input#s1").val());

      var s2 = parseInt($("input#s2").val());

      var s3 = parseInt($("input#s3").val());
      var result = triangle(s1,s2,s3);
      //result for all three variables

      $(".result_triangleType").text(result);


      $("#result").show();
      event.preventDefault();

  });
});
